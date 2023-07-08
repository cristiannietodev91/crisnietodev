"use client";

import React from "react";
import cx from "classnames";
import styles from "./Text.module.css";

type Props = {
  variant?: string;
  size?: string;
  children: React.ReactNode;
};

const Text = ({ variant = "primary", size = "sm", children }: Props) => {
  return (
    <span
      className={cx({
        ...(styles[size] && { [styles[size]]: true }),
        ...(styles[variant] && { [styles[variant]]: true }),
      })}
    >
      {children}
    </span>
  );
};

export default Text;
