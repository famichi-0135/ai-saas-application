/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useActionState } from "react";
import { Label } from "../../label";
import { Input } from "../../input";
import { Button } from "../../button";
import { generateImage } from "@/actions/actions";
import { GenerateImageState } from "@/types/actions";
import { Download, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../loading-spinner";
import { toast } from "sonner";
import { SignInButton, useUser } from "@clerk/nextjs";

const initiailState: GenerateImageState = {
  status: "idle",
};

const ImageGenerator = () => {
  const { isSignedIn } = useUser();

  const [state, formAction, pending] = useActionState(
    generateImage,
    initiailState
  );

  const handleDownload = () => {
    if (!state.imageUrl) {
      return;
    }
    try {
      const base64Data = state.imageUrl.split(",")[1];

      const blob = new Blob([Buffer.from(base64Data, "base64")], {
        type: "image/png",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${state.keyword}.png`;

      document.body.appendChild(link);
      link.click();

      //一時的なリンクを削除
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("ダウンロード完了", {
        description: (
          <span className="text-gray-900">
            画像のダウンロードを完了しました
          </span>
        ),
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      });
    } catch (error) {
      console.error("Download error : ", error);
      toast.warning("エラー", {
        description: (
          <span className="text-rose-500">
            画像のダウンロードに失敗しました。
          </span>
        ),
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">キーワード</Label>
            <Input
              id="keyword"
              name="keyword"
              placeholder="作成したい画像のキーワードを入力（例：都会、山、美少女）"
              required
            />
          </div>
          {/* submitbutton */}
          {isSignedIn ? (
            <Button
              type="submit"
              disabled={pending}
              className={cn("w-full duration-200", pending && "bg-primary/80")}
            >
              {pending ? (
                <LoadingSpinner />
              ) : (
                <>
                  <ImageIcon className="mr-2" />
                  画像を生成する
                </>
              )}
            </Button>
          ) : (
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard/tools/image-generator"}
              forceRedirectUrl={"/dashboard/tools/image-generator"}
            >
              <Button className="w-full">
                <ImageIcon className="mr-2" />
                ログインして画像を生成
              </Button>
            </SignInButton>
          )}
        </form>
      </div>

      {/* image preview */}
      {state.imageUrl && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <img
                src={state.imageUrl}
                alt="Generated image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Button
            className='w-full variant={"outline"}'
            onClick={handleDownload}
          >
            <Download className="mr-2" />
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
