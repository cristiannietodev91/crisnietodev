"use client";

import React from "react";
import cx from "classnames";
import styles from "./Text.module.css";

type Props = {
  variant?: string;
  size?: string;
  className?: string;
  children: React.ReactNode;
};

const Text = ({
  variant = "primary",
  size = "sm",
  children,
  className,
}: Props) => {
  return (
    <p
      className={cx({
        ...(className && { className }),
        ...(styles[size] && { [styles[size]]: true }),
        ...(styles[variant] && { [styles[variant]]: true }),
      })}
    >
      {children}
    </p>
  );
};

export default Text;
