/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useActionState, useState } from "react";
import { Label } from "../../label";
import { Input } from "../../input";
import { Button } from "../../button";
import { compressionImage } from "@/actions/actions";
import { CompressionImageState } from "@/types/actions";
import { Download, ImageIcon, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../loading-spinner";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignInButton, useUser } from "@clerk/nextjs";

const initiailState: CompressionImageState = {
  status: "idle",
};

function CompressionImage() {
  const { isSignedIn } = useUser();

  const [state, formAction, pending] = useActionState(
    compressionImage,
    initiailState
  );
  const [comValue, setComValue] = useState(50);
  const handleVaule = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComValue(Number(e.target.value));
  };

  const handleDownload = () => {
    if (!state.processedImage) {
      // toast.error( "画像圧縮、サイズ変更に失敗しました");
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
            画像圧縮、サイズ変更に失敗しました
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
          <div className="space-y-2 flex justify-between ">
            <div className="space-y-2 w-100">
              <Label htmlFor="quality">画像品質（圧縮率 : {comValue}%)</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
                id="com-ritsu"
                name="com-ritsu"
                className={cn("w-[100%]")}
                onChange={handleVaule}
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-60">
                  サイズ調整 : トリミング
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      縦、横の大きさを指定
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      中央ぞろいになるようトリミングされます
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width(px)</Label>
                      <Input
                        name="width"
                        id="width"
                        placeholder="100"
                        className="col-span-2 h-8"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height(px)</Label>
                      <Input
                        name="height"
                        id="height"
                        placeholder="100"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2"></div>
          {/* submitbutton */}
          {isSignedIn ? (
            //完成し次第Buttonにdisabled={pending}を追加
            <Button
              type="submit"
              disabled={true}
              className={cn("w-full duration-200", pending && "bg-primary/80")}
            >
              {pending ? (
                <LoadingSpinner />
              ) : (
                <>
                  <Layers className="mr-2" />
                  画像を圧縮＆サイズの変更 (鋭意制作中)
                </>
              )}
            </Button>
          ) : (
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard/tools/optimaize"}
              forceRedirectUrl={"/dashboard/tools/optimaize"}
            >
              <Button className="w-full">
                <ImageIcon className="mr-2" />
                ログインして画像を圧縮＆サイズの変更
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
}

export default CompressionImage;
