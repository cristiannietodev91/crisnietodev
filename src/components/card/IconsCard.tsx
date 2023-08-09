"use client";

import React from "react";
import Image from "next/image";
import styles from "./IconsCard.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

type Props = {
  items: Array<{
    src?: string | StaticImport;
    alt: string;
    width: number;
    height: number;
    icon?: IconType;
  }>;
  itemPerRow: number;
};

const IconsCard = ({ items = [], itemPerRow = 3 }: Props) => {
  const numberOfRows = Math.ceil(items.length / itemPerRow);
  return (
    <div className={styles.iconsCard}>
      {[...Array(numberOfRows)].map((_, i) => (
        <div className={styles.iconsCardRow} key={i}>
          {[...Array(itemPerRow)].map((_, j) => {
            const itemIndex = j + i * itemPerRow;
            const image = items[itemIndex];

            const { src, icon: Icon } = image;

            if (src) {
              return (
                <Image
                  key={Math.random()}
                  src={src}
                  alt={image.alt}
                  width={image.height}
                  height={image.width}
                  priority
                  className={styles.image}
                />
              );
            }

            if (Icon) {
              return (
                <Icon
                  key={Math.random()}
                  size={image.width}
                  className={styles.icon}
                ></Icon>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default IconsCard;
