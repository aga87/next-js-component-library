import { ReactNode, ElementType } from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
};

export function Heading({ level = 2, children, className }: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return <Tag className={className}>{children}</Tag>;
}
