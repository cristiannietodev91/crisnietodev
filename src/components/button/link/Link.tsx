import React from "react";
import NextLink from "next/link";
import cx from "classnames";
import { UrlObject } from "url";
import styles from "./Link.module.css";

type Props = {
  href: string | UrlObject;
  children: React.ReactNode;
  className?: string;
  button?: boolean;
  variant?: string;
  size?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined
};

const Link = ({
  href,
  children,
  className,
  button,
  size = "sm",
  variant = "primary",
  target
}: Props) => {
  return (
    <NextLink
      href={href}
      target={target}
      className={cx({
        ...(className && { [className]: true }),
        ...(button && { [styles.button]: true }),
        ...(styles[size] && { [styles[size]]: true }),
        ...(styles[variant] && { [styles[variant]]: true }),
      })}
    >
      {children}
    </NextLink>
  );
};

export default Link;