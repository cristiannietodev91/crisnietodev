"use client";

import React from "react";
import { FaMapMarkerAlt, FaFlag } from "react-icons/fa";
import styles from "./ExperienceCard.module.css";
import Text from "../text/Text";

const ExperienceCard = () => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.title}>
        <Text size="md" textAlign="center">
          Company name
        </Text>
      </div>
      <div className={styles.bodyCard}>
        <div className={styles.subHeader}>
          <span className={styles.subHeaderIcon}>
            <FaMapMarkerAlt className={styles.icon}></FaMapMarkerAlt>
            <Text size="xxs" inline>
              Location
            </Text>
          </span>
          <span className={styles.subHeaderIcon}>
            <FaFlag className={styles.icon}></FaFlag>
            <Text size="xxs" inline>
              Client name
            </Text>
          </span>
        </div>
        <Text size="xxs" className={styles.dateInfo}>2013 May - 2014 Oct</Text>

        <Text size="sm" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam
          nisi assumenda, corporis ullam sint incidunt asperiores unde quos
          eligendi pariatur voluptas distinctio saepe laboriosam quisquam quia?
          Enim, sit illo?
        </Text>
      </div>
    </div>
  );
};

export default ExperienceCard;
