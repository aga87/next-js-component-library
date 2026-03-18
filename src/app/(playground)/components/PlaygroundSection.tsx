import { ReactNode } from "react";

type PlaygroundSectionProps = {
  title: string;
  description: ReactNode;
  children: ReactNode;
  exampleClassName?: string;
};

export const PlaygroundSection = ({
  title,
  description,
  children,
  exampleClassName = "",
}: PlaygroundSectionProps) => {
  return (
    <section className="space-y-3 border-b border-gray-200 py-8">
      <h2 className="text-lg font-medium text-orange-700">{title}</h2>

      <p className="text-sm text-gray-600 max-w-2xl">{description}</p>

      <div className={exampleClassName}>{children}</div>
    </section>
  );
};
