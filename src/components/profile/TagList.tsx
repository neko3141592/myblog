"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TagListProps {
    className?: string;
    tags?: string[];
}

export default function TagList({ className, tags = [] }: TagListProps) {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {tags.map(tag => (
                <Button key={tag} asChild variant="outline" className="rounded-full">
                    <Link href={`/search?tags=${encodeURIComponent(tag)}`}>{tag}</Link>
                </Button>
            ))}
        </div>
    );
}