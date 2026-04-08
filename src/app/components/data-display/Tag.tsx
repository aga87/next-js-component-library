import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="inline-flex items-center rounded-sm bg-bg-muted px-2 py-1 text-sm font-medium text-brand-primary">
      {children}
    </span>
  );
};
