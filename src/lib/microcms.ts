export async function getAllTags() {
    try {
        const res = await fetch(`${process.env.API_URL}/categories`, {
            headers: {
                'X-API-KEY': process.env.MICROCMS_API_KEY || '',
            },
            cache: 'no-store',
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
}
export async function getAllPosts() {
    try {
        const res = await fetch(`${process.env.API_URL}/posts`, {
            headers: {
                'X-API-KEY': process.env.MICROCMS_API_KEY || '',
            },
            cache: 'no-store',
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
} 

export async function getPostById(id: string) {
    try {
        const res = await fetch(`${process.env.API_URL}/posts/${id}` , {
            headers: {
                'X-API-KEY': process.env.MICROCMS_API_KEY || '',
            },
            cache: 'no-store',
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
}

export async function getPostCount() {
    try {
        const res = await fetch(`${process.env.API_URL}/posts?limit=0`, {
            headers: { 
                "X-API-KEY": process.env.MICROCMS_API_KEY || ""
            },
            cache: "no-store",
        });
        if (!res.ok) throw new Error("記事数取得エラー");
        const data = await res.json();
        return data.totalCount;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
    
}

export async function getPosts({ filters = "", orders = "", limit = 10, offset = 0 } = {}) {
    try {
        const params = new URLSearchParams();
        if (filters) params.append("filters", filters);
        if (orders) params.append("orders", orders);
        params.append("limit", String(limit));
        params.append("offset", String(offset));

        const res = await fetch(`${process.env.API_URL}/posts?${params.toString()}`, {
            headers: {
                'X-API-KEY': process.env.MICROCMS_API_KEY || '',
            },
            cache: 'no-store',
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
}