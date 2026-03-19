"use client";

import { useId } from "react";
import { classNames } from "@/app/utils";
import { Label } from "../Label";
import { ErrorMessage } from "../ErrorMessage";

const getDefaultAutoComplete = (
  type: InputFieldProps["type"]
): string | undefined => {
  switch (type) {
    case "email":
      return "email";
    case "password":
      return "current-password";
    case "tel":
      return "tel";
    default:
      return undefined;
  }
};

type InputFieldProps = {
  type?: "text" | "email" | "password" | "number" | "tel";
  name: string;
  label: string;
  value: string;
  isRequired: boolean;
  placeholder?: string;
  errorMsg?: string;
  icon?: React.ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
  autoComplete?: string;
  labelVariant?: "outside" | "inside";
};

export const InputField = ({
  type = "text",
  name,
  label,
  value,
  isRequired,
  placeholder = "",
  errorMsg = "",
  icon,
  handleChange,
  handleKeyDown,
  handleBlur,
  ref,
  autoComplete,
  labelVariant = "outside",
}: InputFieldProps) => {
  const inputId = useId();
  const errorId = useId();
  const hasError = errorMsg !== "";

  const borderClasses = classNames(
    "rounded-xs border transition-colors",
    hasError
      ? "border-error focus-within:border-error"
      : "border-stroke-default focus-within:border-brand-primary"
  );

  const insideLabel = (
    <label
      htmlFor={inputId}
      className="flex items-center gap-x-1 px-4 pt-3 text-xs leading-tight text-bg-secondary"
    >
      <span>{label}</span>
      {icon}
      {isRequired ? <span className="text-error">*</span> : null}
    </label>
  );

  const input = (
    <input
      ref={ref}
      id={inputId}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      className={classNames(
        "block w-full rounded-xs border-none bg-bg-primary",
        labelVariant === "inside" ? "px-4 pt-1 pb-3" : "px-4 py-3",
        "focus:outline-hidden focus:ring-0",
        "placeholder:text-stroke-default"
      )}
      placeholder={placeholder}
      required={isRequired}
      aria-invalid={hasError}
      aria-describedby={hasError ? errorId : undefined}
      autoComplete={autoComplete ?? getDefaultAutoComplete(type)}
    />
  );

  return (
    <div>
      {labelVariant === "outside" ? (
        <>
          <div className="mb-1">
            <Label
              inputId={inputId}
              label={label}
              isRequired={isRequired}
              icon={icon}
            />
          </div>
          <div className={borderClasses}>{input}</div>
        </>
      ) : (
        <div className={borderClasses}>
          {insideLabel}
          {input}
        </div>
      )}

      {hasError ? <ErrorMessage id={errorId} errorMsg={errorMsg} /> : null}
    </div>
  );
};
