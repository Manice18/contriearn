"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
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

const EmptyState = ({ onCreateClick }: { onCreateClick: () => void }) => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6">
    <p className="mt-6 text-center">
      You have not created <br /> any airdrop campaigns yet.
    </p>
    <p className="flex gap-2.5">
      Click below to create one. <CornerRightDown />
    </p>
    <Button onClick={onCreateClick}>Create Airdrop Campaign</Button>
  </div>
);

const AirdropCampaignStats = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const userId = sessionData?.user?.id;

  const [githubAirdrops, setGithubAirdrops] = useState<GithubAirdropCampaign[]>(
    [],
  );
  const [swiggyAirdrops, setSwiggyAirdrops] = useState<SwiggyAirdropCampaign[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [showSwiggy, setShowSwiggy] = useState(false);

  const fetchAirdrops = useCallback(async () => {
    if (!userId) return;

    try {
      const [githubCampaign, swiggyCampaign] = await Promise.all([
        fetchAllGithubCampaignsAction(userId),
        fetchAllSwiggyCampaignsAction(userId),
      ]);

      setGithubAirdrops(githubCampaign);
      setSwiggyAirdrops(swiggyCampaign);
    } catch (error) {
      console.error("Failed to fetch airdrops:", error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchAirdrops();
  }, [fetchAirdrops]);

  const handleCreateClick = () => {
    router.push("/airdrop-campaigns/create-airdrop-campaign");
  };

  const isEmpty = useMemo(
    () => githubAirdrops.length === 0 && swiggyAirdrops.length === 0,
    [githubAirdrops.length, swiggyAirdrops.length],
  );

  if (isLoading) return <AirdropSkeleton />;
  if (isEmpty) return <EmptyState onCreateClick={handleCreateClick} />;

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
