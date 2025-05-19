"use server";

import { decrementUserCredit, getUserCredit } from "@/lib/credit";
import {
  CompressionImageState,
  GenerateImageState,
  RemoveBackgroundState,
} from "@/types/actions";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function generateImage(
  state: GenerateImageState,
  formData: FormData
): Promise<GenerateImageState> {

  const user = await currentUser();
    if (!user) {
      throw new Error("認証が必要です");
    }

    const credits = await getUserCredit();
    if(credits === null || credits < 1){
      redirect("/dashboard/plans?reason=insufficient_credits");
    }

  try {

    const keyword = formData.get("keyword");

    if (!keyword || typeof keyword !== "string") {
      return {
        status: "error",
        error: "キーワードを入力してください",
      };
    }

    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/generate-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ keyword }),
        }
      );

      const data = await response.json();
      await decrementUserCredit(user.id);
      revalidatePath("/dashboard");

      return {
        status: "success",
        imageUrl: data.imageUrl,
        keyword: keyword,
      };
    } catch (error) {
      console.error(error);
      return {
        status: "error",
        error: "画像の生成に失敗しました",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: "画像の生成に失敗しました",
    };
  }
}

export async function removeBackground(
  state: RemoveBackgroundState,
  formData: FormData
): Promise<RemoveBackgroundState> {

  const user = await currentUser();
    if (!user) {
      throw new Error("認証が必要です");
    }

    const credits = await getUserCredit();
    if(credits === null || credits < 1){
      redirect("/dashboard/plans?reason=insufficient_credits");
    }
  
  const image = formData.get("image") as File;

  if (!image) {
    return {
      status: "error",
      error: "画像を選択してください",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/remove-background`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("背景の削除に失敗しました");
    }

    const data = await response.json();
    await decrementUserCredit(user.id);
    revalidatePath("/dashboard");

    return {
      status: "success",
      processedImage: data.imageUrl,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: "背景の削除に失敗しました",
    };
  }
}

export async function compressionImage(
  state: RemoveBackgroundState,
  formData: FormData
): Promise<CompressionImageState> {

  const user = await currentUser();
    if (!user) {
      throw new Error("認証が必要です");
    }

    const credits = await getUserCredit();
    if(credits === null || credits < 1){
      redirect("/dashboard/plans?reason=insufficient_credits");
    }


  const image = formData.get("image") as File;
  const width = formData.get("width");
  const height = formData.get("height");
  const comritsu = formData.get("com-ritsu");

  if (!image || !width || !height || !comritsu) {
    return {
      status: "error",
      error: "画像、またはトリミングサイズを選択してください",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/image-compression`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("画像圧縮、サイズ変更に失敗しました");
    }

    const data = await response.json();
    await decrementUserCredit(user.id);
    revalidatePath("/dashboard");

    return {
      status: "success",
      processedImage: data.imageUrl,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: "画像圧縮、サイズ変更に失敗しました",
    };
  }
}
