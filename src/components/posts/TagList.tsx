export default function TagList({ tags }: { readonly tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-2">
            {tags?.map((tag) => (
                <span
                    key={tag}
                    className="px-2 py-1 bg-blue-200 text-blue-800 rounded-sm text-xs"
                >
                    #{tag}
                </span>
            ))}
        </div>
    );
}
