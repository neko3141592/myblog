"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // 検索処理（onSearchなど）をここに記述
        console.log("検索:", query);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow px-6 py-4">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-4">
                <h1>neko3141592のブログ</h1>
                <form onSubmit={handleSearch} className="flex w-full md:w-auto gap-2">
                    <Input
                        type="text"
                        placeholder="Next.js..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="text-black w-full md:w-48"
                    />
                    <Button type="submit" className="w-20 md:w-auto">検索</Button>
                </form>
            </div>
        </header>
    );
}