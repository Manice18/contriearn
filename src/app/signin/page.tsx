import { redirect } from "next/navigation";

import Signin from "@/components/Auth/Signin";
import getSession from "@/lib/getSession";
import { constructMetaData } from "@/lib/metadata";

export const metadata = constructMetaData({
  title: "Sign In Page | ContriEarn",
  description: "This is the Sign In page for ContriEarn",
});

const SignIn = async () => {
  const session = await getSession();
  const user = session?.user;

  if (user) redirect("/airdrop-campaigns");

  return <Signin />;
};

export default SignIn;
