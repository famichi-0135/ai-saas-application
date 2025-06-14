

import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import ProfileSection from "@/components/ui/dashboard/settings/profile-section";
import SubscriptionSettingForm from "@/components/ui/dashboard/settings/subscription-setting-form";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const SettingsPage = async () => {
  const user = await currentUser();
  console.log("以下データなり");
  console.log(user);

  if (!user) {
    return (
      <div className="flex justify-center items-center my-auto mx-auto  rounded-lg lg:w-60 lg:h-15 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="font-bold text-medium text-white ">
          ログインしてください
        </div>
      </div>
    );
  }

  
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: {
      subscriptions: true,
    },
  });


  console.log("以下DBuser");
  console.log(dbUser);
  // if (!dbUser || !dbUser.subscriptions?.stripeCurrentPeriodEnd) {
  //   throw new Error("ユーザーが見つかりませんでした。");
  // }
  if (!dbUser) {
    throw new Error("ユーザーが見つかりませんでした。");
  }

  if (dbUser.subscriptions?.stripeCurrentPeriodEnd == null) {
    return (
      <div className="flex justify-center items-center my-auto mx-auto  rounded-lg lg:w-80 lg:h-15 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="font-bold text-medium text-white ">
          サブスクリプションに登録してません。
        </div>
      </div>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title="設定"
        desctiption="アカウントの確認とサブスクリプションの設定を管理します"
      />

      {/* アカウントの確認 */}
      <div className="max-w-2xl">
        <ProfileSection
          email={user.emailAddresses[0].emailAddress}
          subscription={dbUser.subscriptionStatus}
          nextBilingData={dbUser.subscriptions?.stripeCurrentPeriodEnd}
        />
      </div>

      {/* サブスクリプション管理用のフォーム　 */}
      <div className="lg:w-2xl">
        <SubscriptionSettingForm user={dbUser} />
      </div>
    </PageContainer>
  );
};

export default SettingsPage;
