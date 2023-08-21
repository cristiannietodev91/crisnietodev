import React from "react";
import Text from "../text/Text";
import styles from "./Experience.module.css";
import AccordionExperience from "../accordion/AccordionExperience";


const Experience = () => {
  return (
    <section id="experience">
      <Text size="lg" variant="primary" textAlign="center" className={styles.title}>
        Experience
      </Text>
      <AccordionExperience className={styles.experienceContainer}></AccordionExperience>
    </section>
  );
};

export default Experience;