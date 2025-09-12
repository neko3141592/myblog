// /src/app/posts/[slug]/page.tsx
import { getPostById } from '@/lib/microcms'; // microCMSから記事取得
import { notFound } from 'next/navigation';

interface Props  {
    params: { id: string }
};

export default async function PostPage({ params }: Props) {
    const post = await getPostById(params.id);

    if (!post) {
        notFound(); 
    }

    return (
        <main>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </main>
    );
}