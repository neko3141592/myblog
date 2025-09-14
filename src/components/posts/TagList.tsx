export default function TagList({ tags }: { readonly tags: string[] }) {
    return (
            <div
                className="flex flex-nowrap gap-2 mb-2 overflow-x-auto w-full scrollbar-none"
                style={{
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE/Edge
                }}
            >
            {tags?.map((tag) => (
                <span
                    key={tag}
                    className="px-2 py-1 bg-teal-200 text-teal-800 rounded-sm text-xs"
                >
                    #{tag}
                </span>
            ))}
        </div>
    );
}
