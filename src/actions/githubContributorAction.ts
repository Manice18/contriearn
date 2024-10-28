"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  GithubContributorFormType,
  githubContributorSchema,
} from "@/lib/validation";

type Contributors = {
  id: number;
  login: string;
  contributions: number;
};

export async function createGithubAirdropCampaignAction(
  values: GithubContributorFormType,
  Contributors: Contributors[],
  eachContributorAmount: number,
  escrowAddress: string,
) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("Unauthorized");

  const data = githubContributorSchema.parse(values);

  const res = await prisma.rewardGithubContributors.create({
    data: {
      userId: userId,
      airdropCampaignName: data.airdropCampaignName,
      gitHubRepo: data.githubRepo,
      totalContributors: data.totalContributors,
      tokenMintAddress: data.tokenMintAddress,
      totalAllocatedAmount: data.totalAllocatedAmount,
      eachContributorAmount: eachContributorAmount,
      escrowAddress: escrowAddress,
    },
  });

  await prisma.rewardGithubContributors.update({
    where: {
      id: res.id,
    },
    data: {
      blinkLink: `https://dial.to/developer?url=https://contriearn.vercel.app/api/actions/restaurant-airdrop?campaignId=${res.id}&cluster=devnet`,
    },
  });

  const contributorPromises = Contributors.map((contributor) => {
    return prisma.githubContributors.create({
      data: {
        rewardGithubContributorsId: res.id,
        totalContributions: contributor.contributions,
        userName: contributor.login,
        claimAmount: eachContributorAmount,
      },
    });
  });

  await Promise.all(contributorPromises);

  return;
}

export async function fetchAllGithubCampaignsAction(userId: string) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const campaignData = await prisma.rewardGithubContributors.findMany({
    where: {
      userId: userId,
    },
  });

  return campaignData;
}
