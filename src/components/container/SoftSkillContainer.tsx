"use client"

import React from "react";
import SoftSkillsCard from "../card/SoftSkillsCard";
import styles from "./SoftSkillContainer.module.css"; 

const SoftSkillContainer = () => {
  return (
    <div className={styles.softSkillsContainer}>
      <SoftSkillsCard
        text="Self-taught"
        src="/graduate.svg"
        alt="Self taught card"
      ></SoftSkillsCard>
      <SoftSkillsCard
        text="Problem-solving"
        src="/solving.svg"
        alt="Problem solving card"
      ></SoftSkillsCard>
      <SoftSkillsCard
        text="Team work"
        src="/team-work.svg"
        alt="Team work card"
      ></SoftSkillsCard>
    </div>
  );
};

export default SoftSkillContainer;
