"use client";

import React from "react";
import Text from "../text/Text";
import Image from "next/image";
import styles from "./Hero.module.css";
import IconsCard from "../card/IconsCard";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import Link from "../button/link/Link";

const Hero = () => {
  const socialNetworkIcons = [
    {
      icon: FaInstagram,
      alt: "Instagram Logo",
      width: 30,
      height: 30,
      href: "https://www.instagram.com/cristiannieto91/",
    },
    {
      icon: FaLinkedin,
      alt: "LinkedIn Logo",
      width: 30,
      height: 30,
      href: "https://www.linkedin.com/in/cristian-nieto-14209366/",
    },
    {
      icon: FaGithub,
      alt: "Git Logo",
      width: 30,
      height: 30,
      href: "https://github.com/cristiannietodev91",
    },
    {
      icon: FaStackOverflow,
      alt: "StackOverFlow Logo",
      width: 30,
      height: 30,
      href: "https://stackoverflow.com/users/3140797/cristian-nieto-dev",
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.contentSm}>
        <Link button href="/resume.pdf" target="_blank" size="md" className={styles.downloadButton}>Download CV</Link>
        <Text size="md" variant="primary">
          Full stack <br />
          developer
        </Text>
        <Text size="lg" variant="primary">
          <span className={styles.titleAccent}>Cristian</span>
        </Text>
        <hr className={styles.hr}></hr>
      </div>
      <div className={styles.contentMd}>
        <Link button href="/resume.pdf" target="_blank" size="md" className={styles.downloadButton}>Download CV</Link>
        <Text size="xlg" variant="primary" className={styles.titleHero}>
          Hello, I am <span className={styles.titleAccent}>Cristian</span>, Full
          stack developer
        </Text>
        <Text size="sm" variant="primary">
          I am a Fullstack engineer with +10 years of experience habituated to work on 
          all-sizes companies and all types of business. My experience is in the back-end with Java and NodeJS, 
          and in the front-end with React, Vue, and ReactNative. 
          work for a wide variety of clients and projects have enhanced my engineering skills
          which I will put into each coming project that I will involved in.
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
      <IconsCard
        items={socialNetworkIcons}
        itemPerRow={4}
        className={styles.iconsContainer}
        classNameRow={styles.iconsRow}
        animated={true}
      ></IconsCard>
    </section>
  );
};

export default Hero;
