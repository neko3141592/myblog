import React from 'react';
import { getPostById } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import styles from './post.module.scss';
import CodeBlock from './CodeBlock';
import TagListLink from '@/components/posts/TagListLink';

interface Props  {
    params: { id: string }
};

export default async function PostPage(props: Props) {

    const { params } = props;
    const awaitedParams = await params;
    const post: Post = await getPostById(awaitedParams.id);

    const tags = post?.tags?.map((tag) => tag.content);

    if (!post) {
        notFound();
    }

        function renderBodyWithCodeBlocks(html: string): React.ReactElement[] {
            const regex = /<pre><code class=\"language-(\w+)\">([\s\S]*?)<\/code><\/pre>/g;
            const parts: React.ReactElement[] = [];
            let lastIndex = 0;
            let match;
            let idx = 0;
            while ((match = regex.exec(html)) !== null) {
                if (match.index > lastIndex) {
                    const text = html.slice(lastIndex, match.index);
                    parts.push(<div key={idx++} dangerouslySetInnerHTML={{ __html: text }} />);
                }
                const lang = match[1];
                const code = match[2]
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&amp;/g, '&')
                    .replace(/&quot;/g, '"');
                parts.push(<CodeBlock key={idx++} code={code} language={lang} />);
                lastIndex = regex.lastIndex;
            }
            if (lastIndex < html.length) {
                const text = html.slice(lastIndex);
                parts.push(<div key={idx++} dangerouslySetInnerHTML={{ __html: text }} />);
            }
            return parts;
        }

        return (
            <main className="container max-w-7xl mx-auto px-4">
                <section>
                    <div className="px-12 py-8 bg-white mb-10">
                        <p className="text-sm text-gray-500 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            {post.createdAt.slice(0, 10)}
                        </p>
                        <h1 className="text-3xl font-bold my-4   rounded-xs">{post.title}</h1>
                        <TagListLink tags={tags || []} />
                    </div>
                    <div className="px-12 py-4 bg-white">
                        <div className={styles.body}>
                        {renderBodyWithCodeBlocks(post.body || "")}
                        </div>
                    </div>
                    
                </section>
            </main>
        );
}