import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/microcms";

export async function GET() {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
}
