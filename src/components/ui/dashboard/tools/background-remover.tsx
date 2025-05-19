/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useActionState } from "react";
import { Label } from "../../label";
import { Input } from "../../input";
import { Button } from "../../button";
import { removeBackground } from "@/actions/actions";
import { GenerateImageState } from "@/types/actions";
import { Download, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../loading-spinner";
import { toast } from "sonner";
import { SignInButton, useUser } from "@clerk/nextjs";

const initiailState: GenerateImageState = {
  status: "idle",
};

const BackgroundRemover = () => {
  const { isSignedIn } = useUser();

  const [state, formAction, pending] = useActionState(
    removeBackground,
    initiailState
  );

  const handleDownload = () => {
    if (!state.processedImage) {
      return;
    }
    try {
      const base64Data = state.processedImage.split(",")[1];

      const blob = new Blob([Buffer.from(base64Data, "base64")], {
        type: "image/png",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `image.png`;

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
  // const BASE_URL = process.env.BASE_URL;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">ファイルをアップロード</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="w-full"
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
                  <Layers className="mr-2" />
                  背景を削除
                </>
              )}
            </Button>
          ) : (
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard/tools/remove-bg"}
              forceRedirectUrl={"/dashboard/tools/remove-bg"}
            >
              <Button className="w-full">
                <Layers className="mr-2" />
                ログインして背景を削除
              </Button>
            </SignInButton>
          )}
        </form>
      </div>

      {/* image preview */}
      {state.processedImage && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <img
                src={state.processedImage}
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

export default BackgroundRemover;
