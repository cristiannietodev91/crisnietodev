"use client"

import { Entry } from 'contentful'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { TypePageBlogPostSkeleton } from '../../../@types/generated'
import BlogCard from '../card/BlogCard'
import styles from "./ListPosts.module.css";

type Props = {
    entries: Entry<TypePageBlogPostSkeleton, undefined, string>[]
}

const ListPosts = ({ entries }: Props) => {
    const isOver900px = useMediaQuery('(min-width: 900px)');

    return (
        <>
            <div className={styles.desktopContainer}>
                <div className={styles.topPostContainer}>
                    <div className={styles.leftTopPost}>
                        <BlogCard
                            imageProps={{
                                imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*if0orFwrdN8q50lKsFkriw.jpeg",
                                altText: "Image contentful",
                                width: 650,
                                height: 480,
                                responsive: false
                            }}
                            authorImage={{
                                imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                altText: "Author",
                                width: 30,
                                height: 30
                            }}
                            authorName='Cristian Nieto'
                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                            tags={["Tecnology", "AI", "Ciber"]} />
                    </div>
                    <div className={styles.rightTopPost}>
                        <div>
                            <BlogCard
                                imageProps={{
                                    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*if0orFwrdN8q50lKsFkriw.jpeg",
                                    altText: "Image contentful",
                                    width: 150,
                                    height: 150
                                }}
                                authorImage={{
                                    imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    altText: "Author",
                                    width: 30,
                                    height: 30
                                }}
                                authorName='Cristian Nieto'
                                title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                                tags={["Tecnology", "AI", "Ciber"]} />
                        </div>
                        <div>
                            <BlogCard
                                imageProps={{
                                    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*if0orFwrdN8q50lKsFkriw.jpeg",
                                    altText: "Image contentful",
                                    width: 150,
                                    height: 150
                                }}
                                authorImage={{
                                    imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    altText: "Author",
                                    width: 30,
                                    height: 30
                                }}
                                authorName='Cristian Nieto'
                                title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                                datePublished="2024-04-30"
                                tags={["Tecnology", "AI", "Ciber"]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.blogsContainer}>
                <BlogCard
                    imageProps={{
                        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*if0orFwrdN8q50lKsFkriw.jpeg",
                        altText: "Image contentful",
                        width: 450,
                        height: 350
                    }}
                    authorImage={{
                        imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        altText: "Author",
                        width: 30,
                        height: 30
                    }}
                    variant={isOver900px ? "horizontal" : "vertical"}
                    authorName='Cristian Nieto'
                    title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                    datePublished="2024-04-30"
                    tags={["Tecnology", "AI", "Ciber"]}
                    description={`Lorem ipsum dolor sit amet consectetur \
                    adipisicing elit. Enim accusantium qui, iusto \
                    facere voluptatem ipsa. Unde libero soluta \
                    officia quisquam et alias consequatur. Veritatis, \
                    quam perferendis quis nesciunt voluptatum libero`} />
                <BlogCard
                    imageProps={{
                        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*if0orFwrdN8q50lKsFkriw.jpeg",
                        altText: "Image contentful",
                        width: 450,
                        height: 350
                    }}
                    authorImage={{
                        imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        altText: "Author",
                        width: 30,
                        height: 30
                    }}
                    variant={isOver900px ? "horizontal" : "vertical"}
                    authorName='Cristian Nieto'
                    title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                    datePublished="2024-04-30"
                    tags={["Tecnology", "AI", "Ciber"]}
                    description={`Lorem ipsum dolor sit amet consectetur \
                    adipisicing elit. Enim accusantium qui, iusto \
                    facere voluptatem ipsa. Unde libero soluta \
                    officia quisquam et alias consequatur. Veritatis, \
                    quam perferendis quis nesciunt voluptatum libero`} />
            </div>
        </>
    )
}

export default ListPosts