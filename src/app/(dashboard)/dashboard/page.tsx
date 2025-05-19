// app/dashboard/page.tsx (または app/dashboard/overview/page.tsx など)

import React from "react";

import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/dashboard/StatCard";
import { RecentSalesTable } from "@/components/ui/dashboard/RecentSalesTable";
import OverviewChart from "@/components/ui/dashboard/OverviewChart";
import PageHeader from "@/components/ui/dashboard/page-header";
import PageContainer from "@/components/ui/dashboard/page-container";

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="DashBoard"
        desctiption="growing everyday"/>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$45,231.89"
            description="+20.1% from last month"
            icon={DollarSign}
          />
          <StatCard
            title="Subscriptions"
            value="+2350"
            description="+180.1% from last month"
            icon={Users}
          />
          <StatCard
            title="Sales"
            value="+12,234"
            description="+19% from last month"
            icon={CreditCard}
          />
          <StatCard
            title="Active Now"
            value="+573"
            description="+201 since last hour"
            icon={Activity}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <OverviewChart />
            {/* {/* ここにチャートコンポーネントを配置 (例: Recharts, Chart.js などと連携) */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                {/* チャートライブラリのコンポーネントをここに追加 */}
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  Chart placeholder (e.g., using Recharts or Chart.js)
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <RecentSalesTable />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
