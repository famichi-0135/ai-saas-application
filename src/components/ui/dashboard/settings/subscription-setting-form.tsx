"use client";

import { User } from "@prisma/client";
import React from "react";
import { Button } from "../../button";
import { useRouter } from "next/navigation";

interface SettingsFormProps {
  user: User;
}

const SubscriptionSettingForm = ({ user }: SettingsFormProps) => {
  const router = useRouter();
  const handleManageSubscription = async () => {
    try {
      
      const response = await fetch("/api/create-portal-session", {
        method: "POST",
      });
      const data = await response.json();
      if(!data){
        console.error("not found url")
      }
      router.push(data.url);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="grid gap-4 p-4 border-2 rounded-lg ">
      <div className="grid gap-2">
        {user?.subscriptionStatus !== "FREE" ? (
          <>
            <p className="text-sm text-muted-foreground pb-2">
              現在のサブスクリプションを管理します。
            </p>
            <Button onClick={() => handleManageSubscription()}>
              サブスクリプション管理
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              まだサブスクリプションに登録してません。
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionSettingForm;
