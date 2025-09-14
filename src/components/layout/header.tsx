"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?title=${encodeURIComponent(query)}`);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 py-4">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-4">
                <h1>
                    <Link href="/" className="transition">
                        neko3141592のブログ
                    </Link>
                </h1>
                <form onSubmit={handleSearch} className="flex w-full md:w-auto gap-2">
                    <Input
                        type="text"
                        placeholder="タイトルで検索..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="text-black w-full md:w-48 rounded-sm bg-gray-100 border-none"
                    />
                    <Button type="submit" className="w-20 md:w-auto rounded-sm bg-teal-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </Button>
                </form>
            </div>
        </header>
    );
}