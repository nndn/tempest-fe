"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

import { ModeToggle } from "./theme_toggle";
import ProfileButton from "./profile_button";

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex p-4 justify-between items-center">
      <Image src="/icon-192x192.png" alt="logo" width={40} height={40} />
      <div className="flex">
        <div className="mr-2">
          <ModeToggle />
        </div>
        {session ? <ProfileButton /> : <SignInButton />}
      </div>
    </div>
  );
}
