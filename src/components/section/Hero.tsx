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
    { icon: FaGithub, alt: "Git Logo", width: 30, height: 30, href: "https://github.com/cristiannietodev91" },
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
      <IconsCard
        items={socialNetworkIcons}
        itemPerRow={4}
        className={styles.iconsContainer}
        classNameRow={styles.iconsRow}
      ></IconsCard>
    </section>
  );
};

export default Hero;
