import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Hero = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Hero;
