import Image from 'next/image'
import React from 'react'
import styles from './SoftSkillsCard.module.css';

type Props = {
    text: string
    src: string
    alt: string
}

const SoftSkillsCard = ({ text, src, alt }: Props) => {
  return (
    <div className={styles.container}>
        <p className={styles.title}>{text}</p>
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          priority
          className={styles.img}
        />
    </div>
  )
}

export default SoftSkillsCard