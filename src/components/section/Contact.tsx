"use client"

import React from "react";
import Text from "../text/Text";
import styles from "./Contact.module.css";
import Button from "../button/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        reprehenderit accusamus nemo a quidem hic.
      </Text>
      <Button size="md">Download cv</Button>
    </div>
  );
};

export default Contact;
