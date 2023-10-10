import React from "react";
import { Text } from "@cristian.nieto.dev/cs-forms";
import styles from "./Experience.module.css";
import AccordionExperience from "../accordion/AccordionExperience";


const Experience = () => {
  return (
    <section id="experience">
      <Text size="xlg" variant="primary" textAlign="center" className={styles.title}>
        Experience
      </Text>
      <AccordionExperience className={styles.experienceContainer}></AccordionExperience>
    </section>
  );
};

export default Experience;
