import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TagList from "@/components/profile/TagList";
import { getAllTags } from "@/lib/microcms";

const tags = ["Next.js", "TypeScript", "microCMS", "猫", "日常", "フロントエンド"];

export default async function Home() {
  const allTags = await getAllTags().then(res => res.contents.map((tag: { content: string }) => tag.content));


  console.log(allTags);
  return (
    <main className="container flex flex-col md:flex-row gap-8 py-8 px-4 mx-auto min-h-screen">
      {/* 左側: プロフィール 1/3 */}
      <section className="md:w-1/3 w-full flex-shrink-0">
        <Card className="w-full">
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
                <CardDescription>フロントエンドエンジニア / Next.js, TypeScript, microCMS, shadcn-ui</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base mt-2">
              趣味でブログを書いています。技術・日常・猫について発信中。
            </p>
            
          </CardContent>
        </Card>
        <div className="mt-4">
          <p className="text-sm text-gray-500 font-bold">#タグ</p>
          <TagList className="mt-2" tags={allTags} />
        </div>
        
      </section>
      {/* 右側: 記事表示 2/3 */}
      <section className="md:w-2/3 w-full">
        {/* ここに記事一覧や記事カードを表示 */}
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-2">記事タイトル例</h2>
            <p className="text-gray-700">ここに記事の概要や本文が入ります。</p>
          </div>
          {/* 記事カードを繰り返し表示する場合はmapで展開 */}
        </div>
      </section>
    </main>
  );
}
