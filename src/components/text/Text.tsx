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
};

const Text = ({
  variant = "primary",
  size = "sm",
  textAlign,
  children,

  className,
}: Props) => {
  return (
    <p
      className={cx({
        ...(className && { [className] : true }),
        ...(styles[size] && { [styles[size]]: true }),
        ...(styles[variant] && { [styles[variant]]: true }),
        ...(styles[textAlign]) && { [styles[textAlign]] : true }
      })}
    >
      {children}
    </p>
  );
};

export default Text;
