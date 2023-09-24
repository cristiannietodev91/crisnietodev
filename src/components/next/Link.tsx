import React from "react";
import NextLink from "next/link";
import { UrlObject } from "url";
import { Button } from "@cristian.nieto.dev/cs-forms";

type Props = {
  href: string | UrlObject;
  children: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "plain";
  size?: "sm" | "md" | "lg";
  outline?: boolean
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isCustom?: boolean
};

const Link = ({
  href,
  children,
  target,
  variant,
  size,
  className,
  outline,
  style,
  onClick,
  isCustom,
}: Props) => {
  return (
    <NextLink
      href={href}
      passHref
      legacyBehavior
    >
      <Button target={target} variant={variant} size={size} className={className} outline={outline} style={style} onClick={onClick} isCustom={isCustom}>{children}</Button>
    </NextLink>
  );
};

export default Link;
