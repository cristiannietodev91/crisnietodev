"use client";

import React from "react";
import Text from "../text/Text";
import IconsCard from "../card/IconsCard";
import SoftSkillContainer from "../container/SoftSkillContainer";
import styles from "./About.module.css";
import { FaJs, FaJava, FaNode, FaReact } from "react-icons/fa";
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
            Full stack developer at Spark
          </Text>
          <Text size="sm" variant="primary" textAlign="justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quaerat laudantium dolore. At aspernatur maiores ut delectus eos
            repellat sapiente rerum non perferendis voluptatem eum iste id sequi
            nihil doloribus illum, tempore labore libero, explicabo praesentium?
            Doloribus reprehenderit consequuntur laborum perspiciatis, minima
            sapiente culpa, praesentium non amet necessitatibus ipsam a fugiat
            consectetur earum?.
          </Text>
        </section>
        <aside className={styles.sidebar}>
          <IconsCard
            items={icons}
            itemPerRow={3}
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
