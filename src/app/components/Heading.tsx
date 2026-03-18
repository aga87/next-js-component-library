type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h2 className="text-center text-3xl font-bold mb-4">{children}</h2>;
};
