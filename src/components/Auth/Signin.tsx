"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LandingFooter,
  LandingHeader,
} from "@/components/Common/LandingComponents";
import { providerMap } from "@/lib/auth";

export default function Signup() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <LandingHeader />
      <main className="flex-1 bg-gray-50 py-16">
        <section className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <Card className="overflow-hidden rounded-lg bg-white shadow-xl">
              <CardHeader className="bg-gray-900 py-10 text-center text-white">
                <CardTitle className="mb-4 text-4xl font-bold">
                  On-Chain Rewards for User Contributions
                </CardTitle>
                <p className="text-xl text-gray-300">
                  Rewarding users for their valuable contributions.
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="flex items-center justify-center space-x-4">
                  <span className="font-semibold text-gray-600">
                    Powered By
                  </span>
                  <Image
                    src="/assets/icons/solana.svg"
                    width={120}
                    height={120}
                    alt="Solana Logo"
                    className="drop-shadow-md"
                  />
                </div>
                <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
                  <span className="font-bold text-gray-900">ContriEarn</span>{" "}
                  empowers devs, restuarant owners, creators to launch airdrop
                  campaigns that reward users for verified actions while
                  preserving privacy. Using zero-knowledge proofs, users can
                  prove eligibility without revealing personal data, ensuring
                  secure engagement. This customizable approach fosters loyalty
                  by promoting meaningful interactions and facilitating
                  confidential reward claims.
                </p>
                <Button
                  onClick={() =>
                    signIn(Object.values(providerMap)[0].id, {
                      callbackUrl: "/airdrop-campaigns",
                    })
                  }
                  className="flex w-full items-center justify-center rounded-lg bg-gray-900 py-6 text-lg text-white shadow-lg transition-colors duration-300 hover:bg-gray-800"
                >
                  <span className="mr-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  Sign up with GitHub
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Button>
                <Button
                  onClick={() =>
                    signIn(Object.values(providerMap)[1].id, {
                      callbackUrl: "/airdrop-campaigns",
                    })
                  }
                  className="flex w-full items-center justify-center rounded-lg bg-gray-900 py-6 text-lg text-white shadow-lg transition-colors duration-300 hover:bg-gray-800"
                >
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign up with Google
                  <ArrowRightIcon className="ml-3 h-5 w-5" />
                </Button>
                <div className="text-center text-sm text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="text-gray-900 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-gray-900 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </div>
              </CardContent>
            </Card>
            <Card className="mt-10 rounded-lg bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Why join ContriEarn?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Earn on-chain rewards for verified actions",
                    "Reward users through engaging airdrop campaigns",
                    "Securely claim rewards with zero-knowledge proofs, keeping your data private.",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
