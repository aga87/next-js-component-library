import { useId } from "react";
import { ErrorMessage } from "./ErrorMessage";

type FieldsetProps = {
  legend: string;
  isRequired?: boolean;
  description?: string;
  error?: string;
  children: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLFieldSetElement>;
};

export const Fieldset = ({
  legend,
  isRequired = false,
  description,
  error,
  children,
  onBlur,
}: FieldsetProps) => {
  const descriptionId = useId();
  const errorId = useId();

  let describedBy: string | undefined;

  if (description && error) {
    describedBy = `${descriptionId} ${errorId}`;
  } else if (description) {
    describedBy = descriptionId;
  } else if (error) {
    describedBy = errorId;
  }

  return (
    <fieldset onBlur={onBlur} aria-describedby={describedBy}>
      <legend className="text-sm">
        <span className="flex items-center gap-x-1">
          <span>{legend}</span>
          {isRequired ? <span>*</span> : null}
        </span>
      </legend>

      {description ? (
        <p id={descriptionId} className="text-sm mt-1 italic">
          {description}
        </p>
      ) : null}

      <div className="mt-2">{children}</div>

      {error ? <ErrorMessage id={errorId} errorMsg={error} /> : null}
    </fieldset>
  );
};
