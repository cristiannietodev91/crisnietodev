"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./IconsCard.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";
import Link from "../button/link/Link";
import { UrlObject } from "url";

type Props = {
  items: Array<{
    src?: string | StaticImport;
    alt: string;
    width: number;
    height: number;
    icon?: IconType;
    href?: string | UrlObject;
  }>;
  itemPerRow: number;
  className?: string;
  classNameRow?: string;
};

const IconsCard = ({
  items = [],
  itemPerRow = 3,
  className,
  classNameRow,
}: Props) => {
  const numberOfRows = Math.ceil(items.length / itemPerRow);
  return (
    <div
      className={cx(styles.iconsCard, {
        ...(className && { [className]: true }),
      })}
    >
      {[...Array(numberOfRows)].map((_, i) => (
        <div
          className={cx(styles.iconsCardRow, {
            ...(classNameRow && { [classNameRow]: true }),
          })}
          key={i}
        >
          {[...Array(itemPerRow)].map((_, j) => {
            const itemIndex = j + i * itemPerRow;
            const image = items[itemIndex];

            if (!image) return;

            const { src, icon: Icon, href } = image;

            let children: JSX.Element = <></>;

            if (src) {
              children = (
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
              children = (
                <Icon size={image.width} className={styles.icon}></Icon>
              );
            }

            return href ? (
              <Link key={Math.random()} href={href}>
                {children}
              </Link>
            ) : (
              <React.Fragment key={Math.random()}>{children}</React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default IconsCard;
