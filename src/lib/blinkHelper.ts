import { NextActionLink } from "@solana/actions";
import { ReclaimProofRequest } from "@reclaimprotocol/js-sdk";

const providers = [
  {
    name: "github",
    providerId: "6d3f6753-7ee6-49ee-a545-62f1b1822ae5",
  },
  {
    name: "swiggy",
    providerId: "1a5215ec-ec39-41a2-932d-38fafe85b886",
  },
];

export async function generateQR({ providerName }: { providerName: string }) {
  const provider = providers.find((provider) => provider.name === providerName);

  const config = {
    reclaimAppId: process.env.RECLAIM_APP_ID,
    reclaimAppSecret: process.env.RECLAIM_APP_SECRET,
    reclaimProviderId: provider?.providerId!,
  };
  const APP_SECRET = config.reclaimAppSecret!;
  const APP_ID = config.reclaimAppId!;
  const PROVIDER_ID = config.reclaimProviderId;
  const reclaimProofRequest = await ReclaimProofRequest.init(
    APP_ID,
    APP_SECRET,
    PROVIDER_ID,
  );
  const requestUrl = await reclaimProofRequest.getRequestUrl();
  const statusUrl = await reclaimProofRequest.getStatusUrl();

  return {
    requestUrl: requestUrl,
    statusUrl: statusUrl,
  };
}

export const getGithubNextAction = (
  stage: string,
  campaignId: string,
  url: string,
  statusUrl: string | null,
  escrowId: string,
  username?: string,
): NextActionLink => {
  return {
    type: "inline",
    action: {
      description: `${stage === "1" ? "Scan the QR to proof your username with zk-proof technology with the help of Reclaim Protocol app and after submitting your proof in the app, click on Submit Proof." : stage === "2" ? "Your GitHub username was verified successfully and hence you are eligible to claim the airdrop. Click on claim and get airdrop for your contributions. Thanks for your contributions and keep contributing!" : stage === "3" ? "Your airdrop is claimed." : ""}`,
      icon: `${url}`,
      label: `${stage === "1" ? "Submit Proof" : stage === "2" ? "Claim Airdrop" : stage === "3" ? "Airdrop Claimed" : ""}`,
      title: `${stage === "1" ? "Proof your GitHub username and claim Airdrop" : stage === "2" ? "Claim Airdrop" : stage === "3" ? "Airdrop Claimed" : ""}`,
      type: "action",
      links: {
        actions: [
          {
            label: `${stage === "1" ? "Submit Proof" : stage === "2" ? "Claim Airdrop" : stage === "3" ? "Airdrop Claimed" : ""}`,
            href: `/api/actions/contributor-airdrop?campaignId=${campaignId}&escrowId=${escrowId}&username=${username}&check=${Number(stage) === 1 ? `start&statusUrl=${statusUrl}` : Number(stage) === 2 ? `verified&claim=false` : ""}`,
            type: "transaction",
          },
        ],
      },
    },
  };
};
export const getSwiggyNextAction = (
  stage: string,
  campaignId: string,
  url: string,
  statusUrl: string | null,
  escrowId: string,
  restaurantName?: string,
): NextActionLink => {
  return {
    type: "inline",
    action: {
      description: `${stage === "1" ? "Scan the QR to proof your last order with zk-proof technology with the help of Reclaim Protocol app and after submitting your proof in the app, click on Submit Proof." : stage === "2" ? `Your Swiggy last order was verified successfully and hence you are eligible to claim the airdrop. Click on claim and get airdrop for your last order at ${restaurantName}. purchasing from our restaurant!` : stage === "3" ? "Your airdrop is claimed." : ""}`,
      icon: `${url}`,
      label: `${stage === "1" ? "Submit Proof" : stage === "2" ? "Claim Airdrop" : stage === "3" ? "Airdrop Claimed" : ""}`,
      title: `${stage === "1" ? "Proof your last order and claim Airdrop" : stage === "2" ? "Claim Airdrop" : stage === "3" ? "Airdrop Claimed" : ""}`,
      type: "action",
      links: {
        actions: [
          {
            label: `${stage === "1" ? "Submit Proof" : stage === "2" ? "Claim Airdrop" : stage === "3" ? "Airdrop Claimed" : ""}`,
            href: `/api/actions/restaurant-airdrop?campaignId=${campaignId}&escrowId=${escrowId}&restaurantName=${restaurantName}&check=${Number(stage) === 1 ? `start&statusUrl=${statusUrl}` : Number(stage) === 2 ? `verified&claim=false` : ""}`,
            type: "transaction",
          },
        ],
      },
    },
  };
};

export const completedAction = ({
  contriType,
}: {
  contriType: string;
}): NextActionLink => {
  return {
    type: "inline",
    action: {
      description: `Airdrop claimed successfully. Thanks for ${contriType === "github" ? "your contributions and keep contributing" : "purchasing from our restaurant"}!`,
      icon: `${process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? "http://localhost:3000/" : "https://contriearn.vercel.app/"}airdrop.webp`,
      label: `Claim Successfull`,
      title: `Airdrop Claimed Successfully`,
      type: "completed",
    },
  };
};
