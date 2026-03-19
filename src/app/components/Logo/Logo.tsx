"use client";

import Image from "next/image";
import logo from "./logo.svg";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 100, height: 23 },
  md: { width: 140, height: 32 },
  lg: { width: 200, height: 46 },
};

export const Logo = ({ size = "md" }: LogoProps) => {
  const { width, height } = sizes[size];

  return (
    <Image
      src={logo}
      alt="Logo"
      width={width}
      height={height}
      priority
      className="inline-block"
    />
  );
};
