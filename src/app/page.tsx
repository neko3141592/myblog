"use client";
import { useEffect, useState } from "react";
import TagList from "@/components/profile/TagList";
import ProfileCard from "@/components/profile/ProfileCard";
import PostCard from "@/components/posts/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
	const [allTags, setAllTags] = useState<string[]>([]);
	const [newPosts, setNewPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(null);
			try {
				const tagsRes = await fetch("/api/tags");
				if (!tagsRes.ok) {
					throw new Error("データの取得中にエラーが発生しました");
				}
				const tagsData = await tagsRes.json();
				setAllTags(tagsData.contents.map((tag: { content: string }) => tag.content));

				const postsRes = await fetch("/api/posts");
				if (!postsRes.ok) {
					throw new Error("データの取得中にエラーが発生しました");
				}
				const postsData = await postsRes.json();
				setNewPosts(postsData.contents);
					} catch (err) {
						if (err instanceof Error) {
							setError(err.message);
						} else {
							setError("データの取得中にエラーが発生しました");
						}
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	const renderPosts = () => {
		if (loading) {
			return (
				<div className="flex justify-center py-8 text-gray-400">
					<svg className="animate-spin h-8 w-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
					</svg>
				</div>
			);
		}
		if (error) {
			return (
				<div className="flex py-8 text-red-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
					</svg>
					<div className="pl-2">{error}</div>
				</div>
			);
		}
		return (
			<div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 pb-2">
				{newPosts.map((post: Post) => (
					<PostCard post={post} key={post.id} />
				))}
			</div>
		);
	};

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
				<Tabs defaultValue="account" className="w-full">
					<TabsList className="mb-2 shadow-xs">
						<TabsTrigger value="account">新しい順</TabsTrigger>
						<TabsTrigger value="password">古い順</TabsTrigger>
					</TabsList>
					<TabsContent value="account">
						{renderPosts()}
					</TabsContent>
					<TabsContent value="password">人気の投稿を表示します。</TabsContent>
				</Tabs>
			</section>
		</main>
	);
}
