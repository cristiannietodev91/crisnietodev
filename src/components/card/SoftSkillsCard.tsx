import Image from "next/image";
import React from "react";
import styles from "./SoftSkillsCard.module.css";
import { IconType } from "react-icons";

type Props = {
  text: string;
  src?: string;
  alt: string;
  icon?: IconType;
};

const SoftSkillsCard = ({ text, src, alt, icon: Icon }: Props) => {
  let icon: JSX.Element = <></>;

  if (src) {
    icon = (
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        priority
        className={styles.img}
      />
    );
  }

  if (Icon) {
    icon = (
      <Icon size={40} className={styles.icon}></Icon>
    );
  } 
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>{text}</p>
      {icon}
    </div>
  );
};

export default SoftSkillsCard;
