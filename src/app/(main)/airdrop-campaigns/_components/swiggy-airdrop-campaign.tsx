"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { MoveRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWallet } from "@solana/wallet-adapter-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SwiggyContributorFormType,
  swiggyContributorSchema,
} from "@/lib/validation";
import { useEscrow } from "@/hooks/useEscrow";
import { createSwiggyAirdropCampaignAction } from "@/actions";

interface Contributors {
  id: number;
  login: string;
  contributions: number;
}

const SwiggyAirdropCampaignForm = () => {
  const { publicKey, connected } = useWallet();
  const router = useRouter();

  const { makeEscrow } = useEscrow();

  const form = useForm<SwiggyContributorFormType>({
    resolver: zodResolver(swiggyContributorSchema),
    defaultValues: {
      airdropCampaignName: "",
      nameOfRestuarant: "",
      perPeopleClaimAmount: 0,
      totalAllocatedAmount: 0,
      tokenMintAddress: "",
    },
  });

  async function onSubmit(values: SwiggyContributorFormType) {
    console.log(values);
    try {
      if (!connected || !publicKey) {
        return;
      }
      let promise: any;
      promise = new Promise<void>(async (resolve, reject) => {
        await makeEscrow({
          deposit: values.totalAllocatedAmount,
          mintA: values.tokenMintAddress,
        }).then(async (res) => {
          if (!res) {
            reject("Error depositing funds.");
            return;
          }
          await createSwiggyAirdropCampaignAction(
            values,
            values.perPeopleClaimAmount,
            res,
          )
            .then(() => {
              resolve();
              router.push("/airdrop-campaigns");
            })
            .catch((error) => {
              reject(error);
            });
        });
      });

      toast.promise(promise, {
        loading: "Creating airdrop campaign...",
        success: "Airdrop campaign created successfully.",
        error: "Failed to create airdrop campaign.",
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 p-4"
      >
        <FormField
          control={form.control}
          name="airdropCampaignName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-black">
                Campaign Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Eg. Gifting token to last order customers"
                  {...field}
                  className="w-full rounded-md text-black transition-all"
                />
              </FormControl>
              <FormDescription>
                The title of the airdrop campaign
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nameOfRestuarant"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Name of your Restaurant</FormLabel>
              <FormControl>
                <Input
                  placeholder="Eg. The Tastebuds Restaurant"
                  {...field}
                  className="w-full rounded-md text-black transition-all"
                />
              </FormControl>
              <FormDescription>
                Enter the name of your Restaurant for which you want last order
                check
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="perPeopleClaimAmount"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Per people Claim Amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Eg. 100"
                  className="w-full rounded-md text-black transition-all"
                />
              </FormControl>
              <FormDescription>
                Enter the amount of reward per people
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between space-x-4">
          <FormField
            control={form.control}
            name="tokenMintAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Native Payment Token</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a token" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU">
                      <div className="flex items-center space-x-2">
                        <Avatar className="size-7">
                          <AvatarImage src="https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694" />
                          <AvatarFallback>USDC</AvatarFallback>
                        </Avatar>
                        <span>USDC</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="So11111111111111111111111111111111111111112">
                      <div className="flex items-center space-x-2">
                        <Avatar className="size-7">
                          <AvatarImage src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756" />
                          <AvatarFallback>wSOL</AvatarFallback>
                        </Avatar>
                        <span>Wrapped SOL</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  The native payment token you want to users to pay
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalAllocatedAmount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="dark:text-white">Total Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 10000"
                    {...field}
                    className="w-full rounded-md text-black transition-all"
                  />
                </FormControl>
                <FormDescription>
                  Total Allocation Amount for the Airdrop
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="z-10 w-[150px] space-x-3 self-end px-7 py-6 text-sm"
          type="submit"
        >
          <span>Create</span>
          <MoveRight size={20} />
        </Button>
      </form>
    </Form>
  );
};

export default SwiggyAirdropCampaignForm;
