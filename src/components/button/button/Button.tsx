"use client"

import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";

type Props = {
  onClick?: () => {};
  className?: string;
  variant?: string;
  size?: string;
  children: React.ReactNode;
};

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  size = "sm",
}: Props) => {
  return (
    <button
      className={cx(styles.button, {
        ...(className && { [className]: true }),
        ...(styles[size] && { [styles[size]]: true }),
        ...(styles[variant] && { [styles[variant]]: true }),
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
