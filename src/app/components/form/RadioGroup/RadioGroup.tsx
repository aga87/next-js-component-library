"use client";

import { type ReactNode, useId } from "react";
import { classNames } from "@/app/utils";

type RadioOption<T extends string | number> = {
  value: T;
  label: string;
  description?: ReactNode;
};

type RadioGroupProps<T extends string | number> = {
  name: string;
  label: string;
  options: readonly RadioOption<T>[];
  value: T | undefined;
  handleChange: (value: T) => void;
  handleBlur?: () => void;
  required?: boolean;
  error?: string;
};

const Radio = <T extends string | number>({
  name,
  value,
  label,
  children,
  isChecked,
  handleChange,
}: {
  name: string;
  value: T;
  label: string;
  children?: ReactNode;
  isChecked: boolean;
  handleChange: (value: T) => void;
}) => {
  const inputId = useId();
  const descriptionId = useId();
  const hasDescription = Boolean(children);

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3">
      <input
        id={inputId}
        name={name}
        type="radio"
        value={String(value)}
        checked={isChecked}
        onChange={() => handleChange(value)}
        aria-describedby={hasDescription ? descriptionId : undefined}
        className="h-4 w-4 shrink-0 border-stroke-default text-brand-primary focus:ring-brand-primary"
      />

      <label htmlFor={inputId} className="min-w-0 cursor-pointer">
        <span
          className={classNames(
            "block text-sm leading-tight text-bg-secondary",
            isChecked && "font-medium"
          )}
        >
          {label}
        </span>

        {children ? (
          <div
            id={descriptionId}
            className="mt-1 text-sm leading-tight text-bg-secondary"
          >
            {children}
          </div>
        ) : null}
      </label>
    </div>
  );
};

export const RadioGroup = <T extends string | number>({
  name,
  label,
  options,
  value,
  handleChange,
  handleBlur,
  required,
  error,
}: RadioGroupProps<T>) => {
  const showError = required && !value && error;

  return (
    <fieldset className="space-y-3" onBlur={handleBlur}>
      <legend className="text-sm font-medium">{label}</legend>

      <div className="space-y-2">
        {options.map((option) => (
          <Radio
            key={String(option.value)}
            name={name}
            value={option.value}
            label={option.label}
            isChecked={value === option.value}
            handleChange={handleChange}
          >
            {option.description}
          </Radio>
        ))}
      </div>

      {showError ? <p className="text-sm text-red-600">{error}</p> : null}
    </fieldset>
  );
};
