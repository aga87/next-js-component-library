import { ReactNode } from "react";

type EmailLinkProps = {
  email: string;
  children?: ReactNode;
};

export function EmailLink({ email, children }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className="underline underline-offset-4 hover:text-brand-primary transition"
    >
      {children ?? email}
    </a>
  );
}
