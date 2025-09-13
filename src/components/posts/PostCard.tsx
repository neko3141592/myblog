import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import TagList from "./TagList";
import Image from 'next/image';

export default function PostCard({ post }: { readonly post: Post }) {
    const tags = post?.tags?.map((tag) => tag.content);
    if (!post) {
        return null;
    }
    return (
        <Link href={`/posts/${post.id}`} className="block hover:shadow-lg transition">
            <Card
                className="w-full sm:w-[300px] flex-shrink-0 rounded-sm cursor-pointer pt-0"
            >
                <CardHeader className="p-0">
                        {post.image ? (
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={300}
                                height={160}
                                className="w-full h-40 object-cover rounded-t-sm"
                                priority 
                            />
                        ) : (
                            <div
                                className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-t-sm"
                                style={{ width: 300, height: 160 }}
                            >
                                <span className="text-gray-400 text-sm">No Image</span>
                            </div>
                        )}
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-lg font-bold mb-2 h-16 overflow-hidden">
                        {post.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-2">
                        {post.description}
                    </p>
                    <TagList tags={tags || []} />
                    <span className="text-xs text-gray-400">
                        {post.publishedAt.slice(0, 10)}
                    </span>
                </CardContent>
            </Card>
        </Link>
    );
}