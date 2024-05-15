import React from 'react'
import Image from 'next/image';
import cx from "classnames";
import styles from "./BlogCard.module.css";
import { Text } from '@cristian.nieto.dev/cs-forms';
import Badge from '../badge/Badge';

type ImageProps = {
    imageUrl: string;
    altText: string;
    width: number;
    height: number;
}

type ImagePropsExtended = ImageProps & { responsive?: boolean }

type Props = {
    imageProps?: ImagePropsExtended;
    authorImage: ImageProps;
    authorName: string;
    title: string;
    datePublished?: string;
    description?: string;
    tags: string[],
    variant?: "vertical" | "horizontal"
    className?: string;
}

const BlogCard = ({ imageProps, authorImage, authorName, datePublished, title, description, tags = [], variant = "vertical", className }: Props) => {


    const renderImage = () => {
        const { imageUrl, altText, width, height, responsive = true } = imageProps || {};

        if (!imageUrl || !altText) return null;

        const imageElement = (
            <Image
                src={imageUrl}
                alt={altText}
                width={width}
                height={height}
                {...(responsive && { layout: "responsive" })}
                className={styles.imageHorizontal}
            />
        );

        return variant === "horizontal" ? (
            <div className={styles.horizontalImageContainer}>
                {imageElement}
            </div>
        ) : imageElement;
    }

    const renderVerticalVariant = () => {
        return (
            <>
                <div className={styles.authorInfo}>
                    <Image
                        src={authorImage.imageUrl}
                        alt={authorImage.altText}
                        width={authorImage.width}
                        height={authorImage.height}
                        className={styles.authorImage} />
                    <Text size="md" textAlign="center" className={styles.title}>
                        {authorName}
                    </Text>
                </div>
                <Text size="xlg">{title}</Text>
                {datePublished && datePublished.length > 0 && <Text size="md">{datePublished}</Text>}
                {description && description.length > 0 && <Text size="md">{description}</Text>}
                {tags && tags.length > 0 && (
                    <div className={styles.badgeContainer}>
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                text={tag}
                                className={styles.badge}
                            ></Badge>
                        ))}
                    </div>
                )}
            </>
        )
    };

    const renderHorizontalVariant = () => {
        return (
            <>
                <div className={styles.horizontalContent}>
                    <Text size="xlg" textAlign='justify'>{title}</Text>
                    {description && description.length > 0 && <Text size="md" textAlign='justify'>{description}</Text>}
                    <div className={cx(styles.authorInfo, styles.authorHorizontal)}>
                        <div className={styles.nameAuthor}>
                            <Image
                                src={authorImage.imageUrl}
                                alt={authorImage.altText}
                                width={authorImage.width}
                                height={authorImage.height}
                                className={styles.authorImage}
                            />
                            <Text size="md" textAlign="center" className={styles.title}>
                                {authorName}
                            </Text>
                        </div>
                        {datePublished && datePublished.length > 0 && <Text size="md">{datePublished}</Text>}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className={cx(styles.blogCard, {
            [styles.horizontal]: variant === "horizontal",
            ...(className && { [className]: true }),
        })}>
            {renderImage()}
            {variant === "vertical" && renderVerticalVariant()}
            {variant === "horizontal" && renderHorizontalVariant()}
        </div>
    )
}

export default BlogCard