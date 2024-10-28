"use client";

import dynamic from "next/dynamic";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

const WalletMultiButtonDynamic = dynamic(
  async () => await import("../contexts/WalletContextProvider"),
  { ssr: false },
);

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <WalletMultiButtonDynamic>
        {children}
        <Toaster position="bottom-center" richColors />
      </WalletMultiButtonDynamic>
    </SessionProvider>
  );
};

export default Providers;
