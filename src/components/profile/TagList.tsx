"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TagList({ className, tags = [] }: {readonly className?: string; readonly tags?: readonly string[]}) {
    return (
        <div className={`flex flex-wrap gap-2 ${className} `}>
            {tags.map(tag => (
                <Button key={tag} asChild variant="outline" className="rounded-sm">
                    <Link href={`/posts?tags=${encodeURIComponent(tag)}`}>#{tag}</Link>
                </Button>
            ))}
        </div>
    );
}