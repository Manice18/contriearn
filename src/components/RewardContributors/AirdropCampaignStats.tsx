"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { CornerRightDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  fetchAllGithubCampaignsAction,
  fetchAllSwiggyCampaignsAction,
} from "@/actions";
import GithubAirdropCampaignTable from "./GithubAirdropCampaignTable";
import AirdropSkeleton from "./AirdropSkeleton";
import SwiggyAirdropCampaignTable from "./SwiggyCampaignTable";

type GithubAirdropCampaign = {
  id: string;
  airdropCampaignName: string;
  blinkLink: string | null;
  gitHubRepo: string;
  totalContributors: number;
  tokenMintAddress: string;
  totalAllocatedAmount: number;
  totalClaimedAmount: number | null;
  escrowAddress: string | null;
  eachContributorAmount: number;
  userId: string;
  noOfTimesClaimed: number | null;
};

type SwiggyAirdropCampaign = {
  id: string;
  airdropCampaignName: string;
  blinkLink: string | null;
  nameOfRestuarant: string;
  tokenMintAddress: string;
  totalAllocatedAmount: number;
  totalClaimedAmount: number | null;
  escrowAddress: string | null;
  perPeopleClaimAmount: number;
  userId: string;
  noOfTimesClaimed: number | null;
};

const AirdropCampaignStats = () => {
  const session = useSession();
  const router = useRouter();

  const [githubAirdrops, setGithubAirdrops] = useState<GithubAirdropCampaign[]>(
    [],
  );
  const [swiggyAirdrops, setSwiggyAirdrops] = useState<SwiggyAirdropCampaign[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showSwiggy, setShowSwiggy] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchAirdrops = async () => {
      const githubCampaign = await fetchAllGithubCampaignsAction(
        session?.data?.user.id,
      );
      const swiggyCampaign = await fetchAllSwiggyCampaignsAction(
        session?.data?.user.id,
      );
      setGithubAirdrops(githubCampaign);
      setSwiggyAirdrops(swiggyCampaign);
    };

    fetchAirdrops();
    setIsLoading(false);
  }, [session?.data?.user.id]);

  if (isLoading) return <AirdropSkeleton />;

  if (githubAirdrops.length === 0 && swiggyAirdrops.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6">
        <p className="mt-6 text-center">
          You have not created <br /> any airdrop campaigns yet.
        </p>
        <p className="flex gap-2.5">
          Click below to create one. <CornerRightDown />
        </p>
        <Button
          onClick={() => {
            router.push("/airdrop-campaigns/create-airdrop-campaign");
          }}
        >
          Create Airdrop Campaign
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end space-x-2 px-4">
        <Label htmlFor="table-toggle" className="text-sm font-medium">
          {showSwiggy ? "Showing Swiggy Airdrops" : "Showing GitHub Airdrops"}
        </Label>
        <Switch
          id="table-toggle"
          checked={showSwiggy}
          onCheckedChange={setShowSwiggy}
        />
      </div>

      <div className="transition-opacity duration-200">
        {showSwiggy ? (
          <SwiggyAirdropCampaignTable airdrop={swiggyAirdrops} />
        ) : (
          <GithubAirdropCampaignTable airdrop={githubAirdrops} />
        )}
      </div>
    </div>
  );
};

export default AirdropCampaignStats;
