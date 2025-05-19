import { Crown, Rocket, Sparkle } from "lucide-react";

export const STRIPE_PLANS = {
  STARTER: "price_1RNWClQ2RepFdMOQTCdmykNm",
  PRO : "price_1RNWDBQ2RepFdMOQy4la4RTT",
  ENTERPRISE : "price_1RNWDiQ2RepFdMOQpoMVkbcE",
}

export const plans = [
  {
    name: "Starter",
    icon: Sparkle,
    price: "￥1,000",
    description: "個人利用に最適なエントリープラン",
    features: ["月50クレジット付与", "基本的な画像生成", "メールサポート"],
    buttonText: "Starterプランを選択",
    priceId: STRIPE_PLANS.STARTER
  },

  {
    name: "Pro",
    icon: Rocket,
    price: "￥2,000",
    description: "プロフェッショナルな制作活動に",
    features: [
      "月120クレジット付与",
      "有線サポート",
      "商用利用可能",
      "メールサポート",
    ],
    populer: true,
    buttonText: "Proプランを選択",
    priceId: STRIPE_PLANS.PRO,
  },
  {
    name: "Enterprize",
    icon: Crown,
    price: "￥5,000",
    description: "ビジネス向けの完全なソリューション",
    features: [
      "月2000クレジット付与",
      "24時間有線サポート",
      "API利用可能",
      "メールサポート",
      "カスタマイズ可能",
    ],
    buttonText: "Enterprizeプランを選択",
    priceId: STRIPE_PLANS.ENTERPRISE,
  },
];
