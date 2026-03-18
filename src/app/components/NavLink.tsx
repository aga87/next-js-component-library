"use client";

import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 transition hover:text-brand-primary"
    >
      {children}
    </Link>
  );
}
