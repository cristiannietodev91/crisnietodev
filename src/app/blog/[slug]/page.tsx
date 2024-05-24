import React from 'react';
import { client } from '@/lib/contentful/client';
import { TypePageBlogPostSkeleton } from '@/types';
import { notFound } from 'next/navigation';
import Post from '@/components/post/Post';

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const res = await client.withoutLinkResolution.getEntries<TypePageBlogPostSkeleton>({ content_type: 'pageBlogPost' });

    const paths = res.items.map(item => (item.fields.slug));

    return paths;
}

async function getPost({ params: { slug } }: Props) {
    const res = await client.withoutUnresolvableLinks.getEntries<TypePageBlogPostSkeleton>({
        content_type: 'pageBlogPost',
        'fields.slug': slug
    });

    if (!res || !res.items || !res.items.length) {
        return null;
    }

    return res.items[0];
}

export default async function PagePost(params: Props) {
    let post = await getPost(params);

    if (!post) {
        return notFound();
    }

    post = {
        ...post,
        fields: {
            ...post.fields,
            relatedBlogPosts: []
        }
    }

    return <Post post={post}></Post>
}