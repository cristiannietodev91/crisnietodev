"use client";

import React from "react";
import Image from "next/image";
import styles from "./TechnologiesCard.module.css";

const TechnologiesCard = () => {
  return (
    <div className={styles.technologiesCard}>
      <div className={styles.technologiesCardRow}>
        <Image
          src="/nodeJs.svg"
          alt="NodeJS Logo"
          width={50}
          height={50}
          priority
          className={styles.image}
        />
        <Image
          src="/reactSvg.svg"
          alt="React Logo"
          width={50}
          height={50}
          priority
          className={styles.image}
        />
        <Image
          src="/java.svg"
          alt="Java Logo"
          width={50}
          height={50}
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.technologiesCardRow}>
        <Image
          src="/android.svg"
          alt="Android Logo"
          width={50}
          height={50}
          priority
          className={styles.image}
        />
        <Image
          src="/javascript.svg"
          alt="JS Logo"
          width={50}
          height={50}
          priority
          className={styles.image}
        />
        <Image
          src="/mysql.svg"
          alt="Java Logo"
          width={50}
          height={50}
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default TechnologiesCard;
