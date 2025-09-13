import TagList from "@/components/profile/TagList";
import { getAllTags, getPostCount, getPosts } from "@/lib/microcms";
import ProfileCard from "@/components/profile/ProfileCard";
import PostCard from "@/components/posts/PostCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
// ...existing code...

export default async function Home() {
	const allTags = await getAllTags().then((res) =>
		res.contents.map((tag: { content: string }) => tag.content)
	);

	const postCount = await getPostCount();
	console.log("記事数:", postCount);

	const newPosts = await getPosts(
		{ limit: 5, orders: "-publishedAt" }
	)
	.then((res) => res.contents);
	console.log("新着記事:", newPosts);

	return (
		<main className="container flex flex-col md:flex-row gap-8 px-4 sm:px-0 mx-auto min-h-screen">
			<section className="md:w-1/4 w-full flex-shrink-0">
				<ProfileCard />
				<div className="mt-4">
					<p className="text-sm text-gray-500 font-bold">タグ</p>
					<TagList className="mt-2" tags={allTags} />
				</div>
			</section>

			<section className="md:w-3/4 w-full">
				<div className="p-4 pt-6 border rounded bg-white">
					<h1 className="border-l-8 border-blue-500 text-2xl mb-4 rounded-xs pl-2">
						最新
					</h1>
          <div className="flex flex-col sm:flex-row gap-6 overflow-x-auto pb-2 relative">
            {newPosts.map((post: Post) => (
                <PostCard post={post} key={post.id} />
            ))}
          </div>
				</div>
				<div className="mt-4 p-4 pt-6 border rounded bg-white">
					<h1 className="border-l-8 border-blue-500 text-2xl mb-4 rounded-xs pl-2">
						おすすめ
					</h1>
          <div className="flex flex-col sm:flex-row gap-6 overflow-x-auto pb-2 relative">
            {newPosts.map((post: Post) => (
                <PostCard post={post} key={post.id} />
            ))}
          </div>
				</div>
			</section>
		</main>
	);
}
