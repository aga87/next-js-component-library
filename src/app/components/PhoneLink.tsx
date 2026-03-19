import { ReactNode } from "react";

export type PhoneLinkProps = {
  tel: string;
  children?: ReactNode;
};

export function PhoneLink({ tel, children }: PhoneLinkProps) {
  return (
    <a
      href={`tel:${tel}`}
      className="underline underline-offset-4 hover:text-brand-primary transition"
    >
      {children ?? tel}
    </a>
  );
}
