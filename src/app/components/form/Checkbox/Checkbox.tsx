import { useId } from "react";
import { classNames } from "@/app/utils";
import { ErrorMessage } from "../ErrorMessage";

export type CheckboxProps = {
  name?: string;
  children: React.ReactNode;
  value: string;
  isChecked: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMsg?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
};

export const Checkbox = ({
  name,
  children,
  value,
  isChecked,
  isDisabled = false,
  isRequired = false,
  errorMsg,
  handleChange,
  handleBlur,
}: CheckboxProps) => {
  const checkboxId = useId();
  const errorId = useId();

  return (
    <div className="flex gap-3 text-sm">
      <div className="flex items-center h-5 shrink-0">
        <input
          id={checkboxId}
          name={name}
          value={value}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          required={isRequired}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errorMsg)}
          aria-required={isRequired}
          aria-describedby={errorMsg ? errorId : undefined}
          className={classNames(
            "h-4 w-4 rounded border border-stroke-default",
            "text-brand-primary focus:ring-brand-primary",
            !isDisabled && "cursor-pointer",
            isDisabled &&
              "bg-bg-muted border-stroke-default text-text-disabled cursor-not-allowed"
          )}
        />
      </div>

      <div className="min-w-0">
        <label
          htmlFor={checkboxId}
          className={classNames(
            "block leading-5",
            !isDisabled && "cursor-pointer",
            isDisabled && "cursor-not-allowed text-text-disabled"
          )}
        >
          {children}
          {isRequired ? <span className="ml-1">*</span> : null}
        </label>

        {errorMsg ? <ErrorMessage id={errorId} errorMsg={errorMsg} /> : null}
      </div>
    </div>
  );
};
