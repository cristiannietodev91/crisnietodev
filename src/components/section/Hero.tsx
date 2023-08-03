"use client";

import React from "react";
import Text from "../text/Text";
import Image from "next/image";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.contentSm}>
        <Text size="md" variant="primary">
          Full stack <br />
          developer
        </Text>
        <Text size="lg" variant="primary">
          Cristian
        </Text>
        <hr className={styles.hr}></hr>
      </div>
      <div className={styles.contentMd}>
        <Text size="xlg" variant="primary" className={styles.titleHero}>
          Hello, I am Cristian, Full stack developer
        </Text>
        <Text size="sm" variant="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          dicta voluptatem! Vitae beatae dolorem voluptas autem repudiandae
          culpa incidunt, adipisci neque consectetur.
        </Text>
      </div>
      <Image
        src="/profile.png"
        alt="Developer picture"
        width={550}
        height={934}
        priority
        className={styles.profile}
      />
    </div>
  );
};

export default Hero;
