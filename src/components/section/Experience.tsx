import React from "react";
import Text from "../text/Text";
import styles from "./Experience.module.css";
import ExperienceCard from "../card/ExperienceCard";


const Experience = () => {
  return (
    <div>
      <Text size="lg" variant="primary" textAlign="center" className={styles.title}>
        Experience
      </Text>
      <ExperienceCard></ExperienceCard>
    </div>
  );
};

export default Experience;
