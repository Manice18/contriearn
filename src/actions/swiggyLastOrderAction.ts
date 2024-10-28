"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  SwiggyContributorFormType,
  swiggyContributorSchema,
} from "@/lib/validation";

export async function createSwiggyAirdropCampaignAction(
  values: SwiggyContributorFormType,
  perPeopleClaimAmount: number,
  escrowAddress: string,
) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("Unauthorized");

  const data = swiggyContributorSchema.parse(values);

  const res = await prisma.rewardSwiggyLastOrder.create({
    data: {
      userId: userId,
      airdropCampaignName: data.airdropCampaignName,
      nameOfRestuarant: data.nameOfRestuarant,
      tokenMintAddress: data.tokenMintAddress,
      totalAllocatedAmount: data.totalAllocatedAmount,
      perPeopleClaimAmount: perPeopleClaimAmount,
      escrowAddress: escrowAddress,
    },
  });

  await prisma.rewardSwiggyLastOrder.update({
    where: {
      id: res.id,
    },
    data: {
      blinkLink: `https://dial.to/developer?url=https://contriearn.vercel.app/api/actions/contributor-airdrop?campaignId=${res.id}&cluster=devnet`,
    },
  });

  return;
}

export async function fetchAllSwiggyCampaignsAction(userId: string) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const campaignData = await prisma.rewardSwiggyLastOrder.findMany({
    where: {
      userId: userId,
    },
  });

  return campaignData;
}
