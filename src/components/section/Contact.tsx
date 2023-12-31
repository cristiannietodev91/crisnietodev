"use client";

import React from "react";
import { Text } from "@cristian.nieto.dev/cs-forms";
import styles from "./Contact.module.css";
import IconsCard from "../card/IconsCard";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import Link from "../next/Link";

const Contact = () => {
  const socialNetworkIcons = [
    {
      icon: FaInstagram,
      alt: "Instagram Logo",
      width: 40,
      height: 40,
      href: "https://www.instagram.com/cristiannieto91/",
    },
    {
      icon: FaLinkedin,
      alt: "LinkedIn Logo",
      width: 40,
      height: 40,
      href: "https://www.linkedin.com/in/cristian-andres-nieto-garcia-14209366/",
    },
    { icon: FaGithub, alt: "Git Logo", width: 40, height: 40, href: "https://github.com/cristiannietodev91" },
    {
      icon: FaStackOverflow,
      alt: "Git Logo",
      width: 40,
      height: 40,
      href: "https://stackoverflow.com/users/3140797/cristian-nieto-dev",
    },
  ];
  return (
    <div id="contact" className={styles.container}>
      <Text size="xlg" variant="primary" textAlign="center">
        Contact me
      </Text>
      <Text
        size="lg"
        variant="primary"
        textAlign="center"
        className={styles.middleText}
      >
        Get in touch
      </Text>
      <Text
        size="md"
        variant="primary"
        textAlign="center"
        className={styles.detail}
      >
        Interested in working together? My inbox is always open lets queue up a time to chat.
      </Text>
      <Link size="lg" href="mailto:cristianandresnieto@gmail.com" target="_top">Contact</Link>
      <IconsCard
        items={socialNetworkIcons}
        itemPerRow={4}
        className={styles.iconsContainer}
        classNameRow={styles.iconsRow}
      ></IconsCard>
    </div>
  );
};

export default Contact;
