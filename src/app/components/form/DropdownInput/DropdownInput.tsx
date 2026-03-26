"use client";

import { useId } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/app/utils";
import { Label } from "../Label";
import { ErrorMessage } from "../ErrorMessage";

export type DropdownInputProps = {
  options: string[];
  selectedItem: string;
  label: string;
  isRequired: boolean;
  errorMsg?: string;
  handleOptionChange: (option: string) => void;
  handleBlur?: () => void;
  labelVariant?: "outside" | "inside";
};

export const DropdownInput = ({
  options,
  selectedItem,
  label,
  isRequired,
  errorMsg = "",
  handleOptionChange,
  handleBlur,
  labelVariant = "outside",
}: DropdownInputProps) => {
  const inputId = useId();
  const errorId = useId();
  const hasError = errorMsg !== "";

  const borderClasses = classNames(
    "rounded-xs border transition-colors w-full",
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
      {isRequired ? <span className="text-error">*</span> : null}
    </label>
  );

  return (
    <div>
      <Listbox value={selectedItem} onChange={handleOptionChange}>
        <div className="relative w-full" onBlur={handleBlur}>
          {labelVariant === "outside" ? (
            <>
              <div className="mb-1">
                <Label
                  inputId={inputId}
                  label={label}
                  isRequired={isRequired}
                />
              </div>

              <div className={borderClasses}>
                <ListboxButton
                  id={inputId}
                  className={classNames(
                    "flex w-full items-center justify-between",
                    "px-4 py-3",
                    "bg-bg-primary",
                    "focus:outline-hidden"
                  )}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                >
                  <span
                    className={classNames(
                      !selectedItem && "text-stroke-default"
                    )}
                  >
                    {selectedItem || "Select an option"}
                  </span>

                  <ChevronDownIcon
                    className="h-5 w-5 text-bg-secondary"
                    aria-hidden="true"
                  />
                </ListboxButton>
              </div>
            </>
          ) : (
            <div className={borderClasses}>
              {insideLabel}

              <ListboxButton
                id={inputId}
                className={classNames(
                  "flex w-full items-center justify-between",
                  "px-4 pt-1 pb-3",
                  "bg-bg-primary",
                  "focus:outline-hidden"
                )}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
              >
                <span
                  className={classNames(!selectedItem && "text-stroke-default")}
                >
                  {selectedItem || "Select an option"}
                </span>

                <ChevronDownIcon
                  className="h-5 w-5 text-bg-secondary"
                  aria-hidden="true"
                />
              </ListboxButton>
            </div>
          )}

          <ListboxOptions
            className={classNames(
              "absolute z-10 mt-1 w-full",
              "rounded-xs border border-stroke-default",
              "bg-bg-primary shadow-lg",
              "focus:outline-hidden"
            )}
          >
            {options.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  classNames(
                    "cursor-pointer px-4 py-2",
                    active && "bg-bg-muted"
                  )
                }
              >
                {({ selected }) => (
                  <span
                    className={classNames(
                      selected && "font-medium text-bg-secondary"
                    )}
                  >
                    {option}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      {hasError ? <ErrorMessage id={errorId} errorMsg={errorMsg} /> : null}
    </div>
  );
};
