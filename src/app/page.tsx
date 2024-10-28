import Image from "next/image";
import Link from "next/link";

import {
  GithubIcon,
  CoinsIcon,
  ArrowRightIcon,
  TrophyIcon,
  Rocket,
  CheckCircleIcon,
} from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Utensils, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  LandingFooter,
  LandingHeader,
} from "@/components/Common/LandingComponents";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <LandingHeader />
      <main className="flex-1">
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Badge
                className="bg-gray-200 text-sm text-gray-700"
                variant="secondary"
              >
                On-Chain Rewards for successful proof of work
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none">
                Proof-Based Airdrop Rewards Made Easy
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                ContriEarn is a platform that help to create airdrop campaign
                where users claim on-chain rewards by proving specific
                achievements or attributes using privacy-preserving zk-proofs
                with Reclaim Protocol and Solana Blinks.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="font-semibold text-gray-600">
                  -- Powered By
                </span>
                <Image
                  src="/assets/icons/solana.svg"
                  width={120}
                  height={120}
                  alt="Solana Logo"
                  className="drop-shadow-md"
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/signin">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    Get Started
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-white py-12 md:py-24 lg:py-32"
          id="features"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-gray-200 bg-gray-50">
                <CardHeader>
                  <CheckCircleIcon className="mb-4 h-12 w-12 text-gray-700" />
                  <CardTitle className="text-gray-900">
                    Verified Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Users can claim rewards by proving specific achievements
                    using privacy-preserving zk-proofs.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-gray-50">
                <CardHeader>
                  <TrophyIcon className="mb-4 h-12 w-12 text-gray-700" />
                  <CardTitle className="text-gray-900">
                    Reward Flexibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Customize reward criteria to engage users based on their
                    actions and contributions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-gray-50">
                <CardHeader>
                  <Rocket className="mb-4 h-12 w-12 text-gray-700" />
                  <CardTitle className="text-gray-900">
                    User-Friendly Interface
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    An intuitive platform that simplifies the process of
                    creating and claiming airdrop rewards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="w-full bg-gray-100 py-12 md:py-24 lg:py-32"
          id="how-it-works"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <Badge className="mb-4 h-8 w-8 bg-gray-200 text-lg text-gray-700">
                    1
                  </Badge>
                  <CardTitle className="text-gray-900">
                    Create Airdrop Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Create a campaign, set the reward amount, and define the
                    criteria.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <Badge className="mb-4 h-8 w-8 bg-gray-200 text-lg text-gray-700">
                    2
                  </Badge>
                  <CardTitle className="text-gray-900">
                    Deposit Airdrop Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Deposit the airdrop amount for the selected campaign and
                    select amount for each person.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <Badge className="mb-4 h-8 w-8 bg-gray-200 text-lg text-gray-700">
                    3
                  </Badge>
                  <CardTitle className="text-gray-900">
                    Share via Blinks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Share the campaign via Blinks and get the contributors to
                    claim the rewards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 lg:py-32"
          id="features"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Reward Your Community
              </h2>
              <p className="text-lg text-gray-600">
                Choose how you want to distribute rewards to your community
                members
              </p>
            </div>

            <Tabs defaultValue="github" className="w-full">
              <TabsList className="mb-12 grid w-full grid-cols-2 gap-4 bg-transparent">
                <TabsTrigger
                  value="github"
                  className="flex items-center gap-2 bg-gray-100 py-4 hover:bg-gray-200 data-[state=active]:bg-gray-900 data-[state=active]:text-white"
                >
                  <Github className="h-5 w-5" />
                  Github Contributors
                </TabsTrigger>
                <TabsTrigger
                  value="swiggy"
                  className="flex items-center gap-2 bg-gray-100 py-4 hover:bg-gray-200 data-[state=active]:bg-gray-900 data-[state=active]:text-white"
                >
                  <Utensils className="h-5 w-5" />
                  Swiggy Customers
                </TabsTrigger>
              </TabsList>

              <TabsContent value="github">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      step: 1,
                      title: "Select Repository",
                      description:
                        "Choose a GitHub repository to reward contributors who have made meaningful contributions.",
                    },
                    {
                      step: 2,
                      title: "Deposit Airdrop Amount",
                      description:
                        "Set up your reward pool by depositing the total amount of tokens to be distributed.",
                    },
                    {
                      step: 3,
                      title: "Share the Blink",
                      description:
                        "Generate and share your unique Blink link across your community channels.",
                    },
                  ].map((feature, index) => (
                    <Card
                      key={index}
                      className="group relative overflow-hidden border-2 border-gray-100 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                    >
                      <CardHeader>
                        <Badge className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-lg font-bold text-white">
                          {feature.step}
                        </Badge>
                        <CardTitle className="flex items-center justify-between text-xl text-gray-900">
                          {feature.title}
                          {index !== 2 && (
                            <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="swiggy">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      step: 1,
                      title: "Enter Restaurant Name",
                      description:
                        "Specify the restaurant name exactly as it appears on Swiggy to target recent customers.",
                    },
                    {
                      step: 2,
                      title: "Deposit Airdrop Amount",
                      description:
                        "Fund your campaign by depositing tokens that will be distributed to eligible customers.",
                    },
                    {
                      step: 3,
                      title: "Share the Blink",
                      description:
                        "Distribute your unique Blink link through your preferred marketing channels.",
                    },
                  ].map((feature, index) => (
                    <Card
                      key={index}
                      className="group relative overflow-hidden border-2 border-gray-100 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                    >
                      <CardHeader>
                        <Badge className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-lg font-bold text-white">
                          {feature.step}
                        </Badge>
                        <CardTitle className="flex items-center justify-between text-xl text-gray-900">
                          {feature.title}
                          {index !== 2 && (
                            <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                Ready to Start Rewarding?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join ContriEarn and start rewarding your contributors
              </p>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/signin">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
