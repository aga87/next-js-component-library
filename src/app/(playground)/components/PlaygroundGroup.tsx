type PlaygroundGroupProps = {
  id: string; // for navigation
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
};

export const PlaygroundGroup = ({
  id,
  title,
  description,
  children,
}: PlaygroundGroupProps) => {
  return (
    <section id={id} className="pb-12 scroll-mt-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {description && (
        <p className="text-sm text-text-secondary">{description}</p>
      )}

      {children}
    </section>
  );
};
