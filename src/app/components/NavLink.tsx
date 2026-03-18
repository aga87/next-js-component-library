"use client";

import Link from "next/link";

type NavLinkProps = {
  text: string;
  path: string;
};

export const NavLink = ({ text, path }: NavLinkProps) => {
  return (
    <Link href={path} className="underline hover:cursor-pointer">
      {text}
    </Link>
  );
};
