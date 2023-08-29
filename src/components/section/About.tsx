"use client";

import React from "react";
import Text from "../text/Text";
import IconsCard from "../card/IconsCard";
import SoftSkillContainer from "../container/SoftSkillContainer";
import styles from "./About.module.css";
import { FaJs, FaJava, FaNode, FaReact, FaGithub, FaHtml5 } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const About = () => {
  const icons: Array<{
    src?: string;
    alt: string;
    width: number;
    height: number;
    icon?: IconType;
  }> = [
    { icon: FaNode, alt: "NodeJS Logo", width: 50, height: 50 },
    { icon: FaReact, alt: "React Logo", width: 50, height: 50 },
    { icon: FaJava, alt: "Java Logo", width: 50, height: 50 },
    { src: "/android.svg", alt: "Android Logo", width: 50, height: 50 },
    { icon: FaJs, alt: "JS Logo", width: 50, height: 50 },
    { src: "/mysql.svg", alt: "MySql Logo", width: 50, height: 50 },
    { icon: FaGithub, alt: "Git Logo", width: 50, height: 50 },
    { icon: FaHtml5, alt: "Git Logo", width: 50, height: 50 },
  ];
  return (
    <main id="about">
      <Text
        size="lg"
        variant="primary"
        textAlign="center"
        className={styles.titleAbout}
      >
        About me
      </Text>
      <div className={styles.aboutSection}>
        <section className={styles.rightSection}>
          <Text
            size="md"
            variant="primary"
            textAlign="center"
            className={styles.subtitleAbout}
          >
            Full stack developer at <span className={styles.subtitleAccent}>Spark Digital</span>
          </Text>
          <Text size="sm" variant="primary" textAlign="justify">
            Software engineer based in Bogota, Colombia. From the beginning of
            my career, I highlighted as a developer, and when you are good at
            doing something you feel in love with that. That drove me to learn a
            wide variety of technologies, patterns, and tools throughout my
            career.
            <br />
            <br />
            Last years journey working with US clients have been the most
            challenging project that I ever participate it has been a time of
            continue learning adapting a many years career to a different
            language but we great learnings.
            <br />
            <br />
            I am a passionate Football fan as well chatting about best soccer
            players and the best Football tournaments around the world of course
            with a beer are sort of plans that bring me happiness. visiting
            famous Football stadiums is always on my booked list.
          </Text>
        </section>
        <aside className={styles.sidebar}>
          <IconsCard
            items={icons}
            itemPerRow={4}
            className={styles.iconsContainerSM}
          ></IconsCard>
          <IconsCard
            items={icons}
            itemPerRow={2}
            className={styles.iconsContainer}
          ></IconsCard>
        </aside>
      </div>
      <SoftSkillContainer></SoftSkillContainer>
    </main>
  );
};

export default About;
