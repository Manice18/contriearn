"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import GithubAirdropCampaignForm from "./github-airdrop-campaign";
import SwiggyAirdropCampaignForm from "./swiggy-airdrop-campaign";

type CampaignType = "github" | "swiggy" | null;

const CreateAirdropCampaignForm = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignType>(null);

  return (
    <div className="mx-auto w-full space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Select Airdrop Campaign</h2>

          <RadioGroup
            onValueChange={(value) =>
              setSelectedCampaign(value as CampaignType)
            }
            value={selectedCampaign || undefined}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="github" id="github" />
              <Label htmlFor="github" className="font-medium">
                Github Contributors
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="swiggy" id="swiggy" />
              <Label htmlFor="swiggy" className="font-medium">
                Swiggy Last Order
              </Label>
            </div>
          </RadioGroup>

          {selectedCampaign && (
            <div className="mt-8">
              {selectedCampaign === "github" ? (
                <GithubAirdropCampaignForm />
              ) : (
                <SwiggyAirdropCampaignForm />
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CreateAirdropCampaignForm;
