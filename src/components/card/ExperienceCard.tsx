"use client";

import React, { useState } from "react";
import cx from "classnames";
import { FaMapMarkerAlt, FaFlag, FaChevronDown } from "react-icons/fa";
import styles from "./ExperienceCard.module.css";
import Text from "../text/Text";
import Badge from "../badge/Badge";
import Link from "../next/Link";

type Props = {
  className?: string;
  companyName?: string;
  clientName?: string;
  dateText?: string;
  location?: string;
  technologies?: Array<string>;
  description?: string;
  linkProject?: {
    text: string;
    link: string;
  };
  open: boolean;
  collapsible?: boolean;
};

const ExperienceCard = ({
  open = false,
  className,
  companyName = "Company name",
  clientName = "Client name",
  dateText = "2013 May - 2014 Oct",
  location = "Location",
  technologies = [],
  description = "",
  linkProject = {
    link: "#",
    text: "Link",
  },
  collapsible = true,
}: Props) => {
  const [isOpen, setOpen] = useState(open);
  return (
    <div
      className={cx(styles.experienceCard, {
        ...(className && { [className]: true }),
      })}
    >
      <div
        className={cx(styles.titleContainer, {
          [styles.titleCollapsible]: collapsible,
        })}
        {...(collapsible && { onClick: () => setOpen(!isOpen) })}
      >
        <Text size="md" textAlign="center" className={styles.title}>
          {companyName}
        </Text>
        {collapsible && (
          <FaChevronDown className={styles.titleIcon}></FaChevronDown>
        )}
      </div>
      <div
        className={cx(styles.bodyCard, {
          [styles.visible]: isOpen,
        })}
      >
        <div className={styles.subHeader}>
          <span className={styles.subHeaderIcon}>
            <FaMapMarkerAlt className={styles.icon}></FaMapMarkerAlt>
            <Text size="xs" inline>
              {location}
            </Text>
          </span>
          <span className={styles.subHeaderIcon}>
            <FaFlag className={styles.icon}></FaFlag>
            <Text size="xs" inline>
              {clientName}
            </Text>
          </span>
        </div>
        <Text size="xxs">
          {dateText}
        </Text>
        <div className={styles.badgeContainer}>
          {technologies.map((technology) => (
            <Badge
              key={technology}
              text={technology}
              className={styles.badge}
            ></Badge>
          ))}
        </div>
        <Text size="sm" textAlign="justify">
          {description}
        </Text>
        <div className={styles.buttonContainer}>
          <Link variant="primary" outline href={linkProject.link} target="_blank" style={{ textTransform: "uppercase"}}>
            {linkProject.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
