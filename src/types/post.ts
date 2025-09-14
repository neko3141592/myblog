interface Post {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    body?: string;
    tags?: [Tags];
    image: {
        url: string;
        height: number;
        width: number;
    }
}


interface Tags {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    content: string;
}