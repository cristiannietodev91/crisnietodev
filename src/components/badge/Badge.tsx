import React from "react";
import cx from "classnames";
import styles from "./Badge.module.css";

type Props = {
  text: string;
  className?: string;
};

const Badge = ({ text, className }: Props) => {
  return (
    <span
      className={cx(styles.badge,{
        ...(className && { [className]: true }),
      })}
    >
      {text}
    </span>
  );
};

export default Badge;
