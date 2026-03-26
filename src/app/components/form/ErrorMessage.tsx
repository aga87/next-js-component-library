type ErrorMessageProps = {
  errorMsg: string;
  id?: string;
};

export const ErrorMessage = ({ errorMsg, id }: ErrorMessageProps) => {
  return (
    <p
      id={id}
      role="alert"
      aria-live="assertive"
      className="mt-1 text-xs text-error"
    >
      {errorMsg}
    </p>
  );
};
