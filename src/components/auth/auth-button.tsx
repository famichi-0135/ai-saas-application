"use client";

import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
// import { auth } from '@clerk/nextjs/server';

const AuthButton = () => {
  const { userId } = useAuth();

  if (userId) {
    return (
      <UserButton
        appearance={{
          elements: {
            avatarBox: "1.2rem",
          },
        }}
      />
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button asChild variant={"outline"}>
        <SignInButton
          mode="modal"
          fallbackRedirectUrl={"/dashboard"}
          forceRedirectUrl={"/dashboard"}
        >
          {"ログイン"}
        </SignInButton>
      </Button>
      <Button asChild variant={"default"}>
        <SignUpButton
          mode="modal"
          fallbackRedirectUrl={"/dashboard"}
          forceRedirectUrl={"/dashboard"}
        >
          新規登録
        </SignUpButton>
      </Button>
    </div>
  );
};

export default AuthButton;
