type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="px-4 sm:px-6 md:px-12">
      <div className="mx-auto max-w-315">{children}</div>
    </div>
  );
};
