type PlaygroundGroupProps = {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
};

export const PlaygroundGroup = ({
  title,
  description,
  children,
}: PlaygroundGroupProps) => {
  return (
    <section className="pb-12">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {description && (
        <p className="text-sm text-text-secondary">{description}</p>
      )}

      {children}
    </section>
  );
};
