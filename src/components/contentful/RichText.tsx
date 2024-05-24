import { BLOCKS, INLINES, MARKS, type Document, type Inline, type Block } from '@contentful/rich-text-types'
import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Text } from '@cristian.nieto.dev/cs-forms'
import styles from './RichText.module.css';

const options: Options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => {
            return <Text textAlign='justify' className={styles.paragraph}>{children}</Text>
        },
        [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline) => {
            if (node.data.target.sys.contentType.sys.id === 'post') {
                return (
                    <Link href={`/blog/${node.data.target.fields.slug}`}>
                        {node.data.target.fields.title}
                    </Link>
                )
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
            if (node.data.target.sys.contentType.sys.id === 'componentRichImage') {
                const { image, title } = node.data.target.fields;
                const { fields: imageFields } = image;
                const { file } = imageFields;
                const { url, details } = file;

                return (
                    <Image
                        src={`https:${url}`}
                        alt={title}
                        height={details.image.height}
                        width={details.image.width}
                        layout='responsive'
                        className={styles.postImage}
                    />
                )
            }
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
            return (
                <Image
                    src={node.data.target.fields.file.url}
                    alt={node.data.target.fields.title}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                />
            )
        }
    }
}

const RichText = ({ content }: { content: Document }) => {
    return <div className={styles.content}>{documentToReactComponents(content, options)}</div>
}

export default RichText