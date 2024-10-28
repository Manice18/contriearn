import { NextRequest } from "next/server";

import {
  createActionHeaders,
  NextActionPostRequest,
  ActionError,
  CompletedAction,
} from "@solana/actions";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

import prisma from "@/lib/prisma";

// create the standard headers for this route (including CORS)
const headers = createActionHeaders();

export const GET = async (req: Request) => {
  return Response.json({ message: "Method not supported" } as ActionError, {
    status: 403,
    headers,
  });
};

export const OPTIONS = async () => Response.json(null, { headers });

export const POST = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const campaignId = url.searchParams.get("campaignId") as string;
    const username = url.searchParams.get("username") as string;
    const amount = url.searchParams.get("amount") as string;

    const body: NextActionPostRequest = await req.json();

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      throw 'Invalid "account" provided';
    }

    let signature: string;
    try {
      signature = body.signature!;
      if (!signature) throw "Invalid signature";
    } catch (err) {
      throw 'Invalid "signature" provided';
    }

    const connection = new Connection(
      process.env.NEXT_PUBLIC_SOLANA_RPC! || clusterApiUrl("devnet"),
    );

    try {
      let status = await connection.getSignatureStatus(signature);

      if (!status) throw "Unknown signature status";

      // only accept `confirmed` and `finalized` transactions
      if (status.value?.confirmationStatus) {
        if (
          status.value.confirmationStatus != "confirmed" &&
          status.value.confirmationStatus != "finalized"
        ) {
          throw "Unable to confirm the transaction";
        }
      }
      try {
        const addOrUpdateSuccessfulClaimer =
          await prisma.githubContributors.update({
            where: {
              userName_rewardGithubContributorsId: {
                userName: username,
                rewardGithubContributorsId: campaignId,
              },
            },
            data: {
              haveClaimed: true,
            },
          });

        const incrementContributorNumber =
          await prisma.rewardGithubContributors.update({
            data: {
              noOfTimesClaimed: {
                increment: 1,
              },
              totalClaimedAmount: {
                increment: Number(amount),
              },
            },
            where: {
              id: campaignId,
            },
          });

        await Promise.all([
          addOrUpdateSuccessfulClaimer,
          incrementContributorNumber,
        ]);
      } catch (error) {
        console.error("Error updating db:", error);
        throw "Errow claiming";
      }
    } catch (err) {
      if (typeof err == "string") throw err;
      throw "Unable to confirm the provided signature";
    }

    const transaction = await connection.getParsedTransaction(signature, {
      maxSupportedTransactionVersion: 0,
      commitment: "confirmed",
    });

    const payload: CompletedAction = {
      type: "completed",
      title: "Airdrop Campaign Created Successfully!",
      icon: new URL("/airdrop.webp", new URL(req.url).origin).toString(),
      label: `Claim Successful!`,
      description: `Airdrop claimed successfully. Thanks for your contributions and keep contributing!`,
    };

    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    let actionError: ActionError = { message: "An unknown error occurred" };
    if (typeof err == "string") actionError.message = err;
    return Response.json(actionError, {
      status: 400,
      headers,
    });
  }
};
