"use client";

import React from "react";
import cx from "classnames";
import styles from "./Text.module.css";

type Props = {
  variant?: string;
  size?: string;
  className?: string;
  textAlign?: string;
  children: React.ReactNode;
  inline?: boolean;
};

const Text = ({
  variant = "primary",
  size = "sm",
  textAlign,
  children,
  className,
  inline = false,
}: Props) => {
  return (
    <p
      className={cx({
        ...(styles[size] && { [styles[size]]: true }),
        ...(styles[variant] && { [styles[variant]]: true }),
        ...(textAlign && styles[textAlign]) && { [styles[textAlign]] : true },
        ...(className && { [className] : true }),
        [styles.inline]: inline,
      })}
    >
      {children}
    </p>
  );
};

export default Text;
