import BackgroundRemover from "@/components/ui/dashboard/tools/background-remover";
import CompressionImage from "@/components/ui/dashboard/tools/compression-image";
import ImageGenerator from "@/components/ui/dashboard/tools/image-generator";


export const tools = {
  "image-generator" : {
    title: "画像生成",
    description: "AIを使用してお好みの画像を生成しよう",
    components: ImageGenerator,
  },
  "remove-bg" : {
    title: "背景削除",
    description: "画像から背景を自動で削除",
    components: BackgroundRemover,
  },
  "optimaize" : {
    title: "画像圧縮",
    description: "画像を最適なサイズに加工しよう",
    components: CompressionImage,
  },
};

export type ToolType = keyof typeof tools;