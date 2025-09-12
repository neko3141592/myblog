
export async function getAllTags() {
    const res = await fetch(`https://neko3141592blog.microcms.io/api/v1/categories`, {
        headers: {
            'X-API-KEY': process.env.MICROCMS_API_KEY || '',
        },
        cache: 'no-store',
    });
    const data = await res.json();
    return data;
};

export async function getPostById(id: string) {
    const res = await fetch(`https://neko3141592blog.microcms.io/api/v1/posts/${id}` , {
        headers: {
            'X-API-KEY': process.env.MICROCMS_API_KEY || '',
        },
        cache: 'no-store',
    });
    const data = await res.json();
    return data;
}