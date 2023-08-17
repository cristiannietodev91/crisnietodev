"use client";

import React from "react";
import Text from "../text/Text";
import styles from "./Contact.module.css";
import Button from "../button/button/Button";
import IconsCard from "../card/IconsCard";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

const Contact = () => {
  const socialNetworkIcons = [
    {
      icon: FaInstagram,
      alt: "Instagram Logo",
      width: 40,
      height: 40,
      href: "#",
    },
    {
      icon: FaLinkedin,
      alt: "LinkedIn Logo",
      width: 40,
      height: 40,
      href: "#",
    },
    { icon: FaGithub, alt: "Git Logo", width: 40, height: 40, href: "#" },
    {
      icon: FaStackOverflow,
      alt: "Git Logo",
      width: 40,
      height: 40,
      href: "#",
    },
  ];
  return (
    <div id="contact" className={styles.container}>
      <Text size="lg" variant="primary" textAlign="center">
        Contact me
      </Text>
      <Text
        size="md"
        variant="primary"
        textAlign="center"
        className={styles.middleText}
      >
        Get in touch
      </Text>
      <Text
        size="sm"
        variant="primary"
        textAlign="center"
        className={styles.detail}
      >
        Interested in working together? My inbox is always open lets queue up a time to chat.
      </Text>
      <Button size="md">Contact</Button>
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
