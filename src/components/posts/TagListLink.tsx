import Link from "next/link";

export default function TagListLink({ tags }: { readonly tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-2">
            {tags?.map((tag) => (
                <span
                    key={tag}
                    className="px-2 py-1 bg-blue-200 text-blue-800 rounded-sm text-xs"
                >
                    <Link href={`/posts?tags=${encodeURIComponent(tag)}`} className="hover:underline">#{tag}</Link>
                </span>
            ))}
        </div>
    );
}
