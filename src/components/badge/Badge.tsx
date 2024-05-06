import React from "react";
import cx from "classnames";
import styles from "./Badge.module.css";
import { Text } from "@cristian.nieto.dev/cs-forms";

type Props = {
  text: string;
  className?: string;
  size?: "xlg" | "xs" | "sm" | "md" | "lg" | "xxlg" | "xxxlg";
};

const Badge = ({ text, className, size = "sm" }: Props) => {
  return (
    <Text
      className={cx(styles.badge,{
        ...(className && { [className]: true }),
      })}
      inline={true}
      size={size}
    >
      {text}
    </Text>
  );
};

export default Badge;
