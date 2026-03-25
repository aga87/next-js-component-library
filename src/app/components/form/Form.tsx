type FormProps = {
  children: React.ReactNode;
  id?: string;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, id, handleSubmit }: FormProps) => (
  <form onSubmit={handleSubmit} id={id} noValidate>
    {children}
  </form>
);
