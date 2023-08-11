"use client"

import React from "react";
import SoftSkillsCard from "../card/SoftSkillsCard";
import styles from "./SoftSkillContainer.module.css"; 
import { FaGraduationCap, FaLaptopCode, FaPeopleCarry } from "react-icons/fa";

const SoftSkillContainer = () => {
  return (
    <div className={styles.softSkillsContainer}>
      <SoftSkillsCard
        text="Self-taught"
        alt="Self taught card"
        icon={FaGraduationCap}
      ></SoftSkillsCard>
      <SoftSkillsCard
        text="Problem-solving"
        alt="Problem solving card"
        icon={FaLaptopCode}
      ></SoftSkillsCard>
      <SoftSkillsCard
        text="Team work"
        alt="Team work card"
        icon={FaPeopleCarry}
      ></SoftSkillsCard>
    </div>
  );
};

export default SoftSkillContainer;
