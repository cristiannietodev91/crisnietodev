"use client"

import React from 'react';
import { Text } from '@cristian.nieto.dev/cs-forms';
import BlogCard from '../card/BlogCard';
import styles from "./ListPosts.module.css";
import Image from 'next/image';
import noPostImage from "./noBlogs.png";
import { TypePageBlogPostWithoutUnresolvableLinksResponse } from '@/types';
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery';


type Props = {
    entries: TypePageBlogPostWithoutUnresolvableLinksResponse[]
}

type RenderBlogCardType = {
    item: TypePageBlogPostWithoutUnresolvableLinksResponse;
    renderDescription?: boolean;
    renderPublishedDate?: boolean;
    variant?: "vertical" | "horizontal";
    className?: string;
    imagePostProps?: {
        width?: number;
        height?: number;
        responsive?: boolean;
    }
}


const ListPosts = ({ entries }: Props) => {
    const isOver900px = useBetterMediaQuery('(min-width: 900px)');

    if (!entries || entries.length === 0) {
        return (
            <div className={styles.noBlogsContainer}>
                <div className={styles.noBlogsImageContainer}>
                    <Image src={noPostImage} alt="No blogs image" layout="responsive" width={500} height={500} />
                </div>
                <Text size='lg' className={styles.emptyFirstDescription}>Looks like there are not blogs created yet</Text>
                <Text>Blogs are created from the CMS, go there and express your ideas</Text>
            </div>
        );
    }

    const RenderBlogCard = ({
        item,
        variant,
        className,
        renderDescription = true,
        renderPublishedDate = true,
        imagePostProps
    }: RenderBlogCardType) => {
        const { slug, title, author, featuredImage, shortDescription, publishedDate } = item.fields;

        if (!author || !featuredImage) {
            return null;
        }

        const { file: postImageFile } = featuredImage.fields;
        const { url: postImageUrl } = postImageFile || {};
        const { width = 650, height = 480, responsive = true } = imagePostProps || {};

        const { name, avatar } = author.fields;
        const { file: authorFile } = avatar?.fields || {};
        const { url: authorImageUrl } = authorFile || {};

        return <BlogCard
            slug={slug}
            imageProps={{
                imageUrl: `https:${postImageUrl}`,
                altText: "Image contentful",
                width: width,
                height: height,
                responsive: responsive
            }}
            authorImage={{
                imageUrl: `https:${authorImageUrl}`,
                altText: "Author",
                width: 30,
                height: 30
            }}
            authorName={name || 'No author'}
            title={title}
            tags={[]}
            className={className}
            variant={variant}
            {...(renderDescription && { description: shortDescription })}
            {...(renderPublishedDate && { datePublished: publishedDate })} />
    }


    return (<>
        <div className={styles.desktopContainer}>
            <div className={styles.topPostContainer}>
                <div className={styles.leftTopPost}>
                    {entries && entries[0] && (
                        <RenderBlogCard
                            item={entries[0]}
                            className={styles.topBlogStyle}
                            renderDescription={false}
                            renderPublishedDate={false}
                            imagePostProps={{ responsive: false, height: 650 }}
                        />
                    )}
                </div>
                <div className={styles.rightTopPost}>
                    {entries && entries[1] && (
                        <RenderBlogCard
                            item={entries[1]}
                            className={styles.topBlogStyle}
                            renderDescription={false}
                            renderPublishedDate={false}
                            imagePostProps={{ width: 500, height: 300, responsive: false }}
                        />
                    )}
                    {entries && entries[2] && (
                        <RenderBlogCard
                            item={entries[2]}
                            className={styles.topBlogStyle}
                            renderDescription={false}
                            renderPublishedDate={false}
                            imagePostProps={{ width: 500, height: 300, responsive: false }}
                        />
                    )}
                </div>
            </div>
        </div>
        <div className={styles.blogsContainer}>
            {entries && entries.length > 0 && entries.map(entry => (
                <RenderBlogCard
                    item={entry} key={entry.fields.slug}
                    variant={isOver900px ? "horizontal" : "vertical"} />
            ))}
        </div>
    </>
    )
}

export default ListPosts