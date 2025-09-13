import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function ProfileCard () {
    return (
        <Card className="w-full rounded-sm ">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Image
                src="/neko3141592.png"
                alt="プロフィール画像"
                width={64}
                height={64}
                className="rounded-full border"
              />
              <div>
                <CardTitle className="text-lg font-bold">neko3141592</CardTitle>
                <CardDescription>Web開発 / TypeScript, Next.js, Express... </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base mt-2">
              趣味でブログを書いています。技術・日常・猫について発信中。
            </p>
            
          </CardContent>
        </Card>
    )
}