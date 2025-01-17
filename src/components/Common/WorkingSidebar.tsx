"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

import {
  Crown,
  Settings,
  LogOut,
  BadgeDollarSign,
  ClipboardList,
  FileBadge,
  ChefHat,
} from "lucide-react";
import { motion } from "framer-motion";

import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Airdrop Campaigns",
    href: "/airdrop-campaigns",
    icon: (
      <ChefHat className="size-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: (
      <Settings className="size-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];

export function WorkingSidebar({ children }: { children?: React.ReactNode }) {
  const session = useSession();
  const user = session?.data?.user;

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "mx-auto overflow-x-hidden overflow-y-scroll px-4 md:pl-20 md:pr-0 2xl:pr-20",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="z-[99999] justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <div
                className="group/sidebar flex items-center justify-start gap-2 py-2 hover:cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="size-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />

                <span className="!m-0 inline-block whitespace-pre !p-0 text-sm text-neutral-700 transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200">
                  Logout
                </span>
              </div>
            </div>
          </div>
          <div>
            {/* {user && <UserButton user={user} />} */}
            {user && (
              <SidebarLink
                link={{
                  label: user?.name || "User",
                  href: "settings",
                  icon: (
                    <div className="flex items-center justify-between">
                      <Image
                        src={
                          user?.image || "/assets/icons/avatar_placeholder.png"
                        }
                        className="h-7 w-7 flex-shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                      />
                    </div>
                  ),
                }}
              />
            )}
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      {/* <div className="h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-black dark:bg-white" /> */}
      <Image
        height={50}
        width={50}
        src="/assets/brand-icons/logo.svg"
        alt="ContriEarn Logo"
        className="size-10"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre text-lg font-bold text-gray-900 dark:text-white md:text-3xl"
      >
        ContriEarn
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image
        height={50}
        width={50}
        src="/assets/brand-icons/logo.svg"
        alt="ContriEarn Logo"
        className="size-10"
      />
    </Link>
  );
};
