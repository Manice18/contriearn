import Link from "next/link";

import { Button } from "@/components/ui/button";
import AirdropCampaignStats from "@/components/RewardContributors/AirdropCampaignStats";
import { constructMetaData } from "@/lib/metadata";

export const metadata = constructMetaData({
  title: "Reward Contributors | ContriEarn",
  description: "This is the Reward Contributors Page for ContriEarn",
});

const Page = () => {
  return (
    <section>
      <div className="mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Reward Contributors
          </h1>
          <Link href="/airdrop-campaigns/create-airdrop-campaign">
            <Button>Create Airdrop Campaign</Button>
          </Link>
        </div>
        <AirdropCampaignStats />
      </div>
    </section>
  );
};

export default Page;
