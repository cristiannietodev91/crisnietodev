"use client"

import React from 'react';
import Image from 'next/image';
import { Text } from '@cristian.nieto.dev/cs-forms';
import { TypePageBlogPostWithoutUnresolvableLinksResponse } from '@/types';
import RichText from '../contentful/RichText';
import styles from './Post.module.css';


type PostProps = {
    post: TypePageBlogPostWithoutUnresolvableLinksResponse
}

const Post = ({ post }: PostProps) => {
    const { title, author, featuredImage, shortDescription, publishedDate, content } = post.fields;

    if (!author || !featuredImage) {
        return null;
    }

    const { file: postImageFile } = featuredImage.fields;
    const { url: postImageUrl } = postImageFile || {};

    const { name: authorName, avatar } = author.fields;
    const { file: authorFile, description: authorDescription } = avatar?.fields || {};
    const { url: authorImageUrl } = authorFile || {};

    return <div className={styles.postContainer}>
        <div className={styles.postHeader}>
            <Image
                src={`https:${postImageUrl}`}
                alt="Post image"
                width={650}
                height={480} 
                layout='responsive' 
                className={styles.postHeaderImage}/>
            <div className={styles.postDescriptionContainer}>
                <Text size="xlg" textAlign='justify'>{title}</Text>
                <div className={styles.authorInfo}>
                    <Text>By <span className={styles.authorName}>{authorName}</span></Text>
                    <Image
                        src={`https:${authorImageUrl}`}
                        alt={authorDescription || ''}
                        width={30}
                        height={30}
                        className={styles.authorImage} />
                </div>

                <Text className={styles.postDate}>{publishedDate}</Text>
                <Text size='lg' className={styles.description} textAlign='justify'>{shortDescription}</Text>
            </div>
        </div>
        <RichText content={content}></RichText>
    </div>
}

export default Post