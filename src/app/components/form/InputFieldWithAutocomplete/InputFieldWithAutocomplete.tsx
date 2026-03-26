"use client";

import { useId, useRef, useState } from "react";
import { classNames } from "@/app/utils";
import { Label } from "../Label";
import { ErrorMessage } from "../ErrorMessage";
import { useRovingFocus } from "@/app/hooks/useRovingFocus";

type InputFieldWithAutocompleteProps<T extends { id: string; value: string }> =
  {
    name: string;
    label: string;
    value: string;
    autocompleteSuggestions: T[];
    handleSuggestionClick: (suggestion: T) => void;
    showSuggestions: boolean;
    setShowSuggestions?: React.Dispatch<React.SetStateAction<boolean>>;
    isRequired: boolean;
    placeholder?: string;
    errorMsg?: string;
    icon?: React.ReactNode;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: () => void;
    ref?: React.Ref<HTMLInputElement>;
    labelVariant?: "outside" | "inside";
  };

export const InputFieldWithAutocomplete = <
  T extends { id: string; value: string },
>({
  name,
  label,
  value,
  autocompleteSuggestions,
  handleSuggestionClick,
  showSuggestions,
  setShowSuggestions,
  isRequired,
  placeholder = "",
  errorMsg = "",
  icon,
  handleChange,
  handleBlur,
  ref,
  labelVariant = "outside",
}: InputFieldWithAutocompleteProps<T>) => {
  const inputId = useId();
  const errorId = useId();
  const listboxId = useId();

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const hasError = errorMsg !== "";
  const hasSuggestions = showSuggestions && autocompleteSuggestions.length > 0;

  const { widgetItemsRefs, handleKeyDown: handleSuggestionKeyDown } =
    useRovingFocus(autocompleteSuggestions.length, 0, true);

  const handleInputFocus = () => {
    setIsFocused(true);
    setShowSuggestions?.(true);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const next = e.relatedTarget as Node | null;

    if (next && wrapperRef.current?.contains(next)) return;

    setIsFocused(false);
    setShowSuggestions?.(false);
    handleBlur?.();
  };

  const handleListBlur = (e: React.FocusEvent<HTMLUListElement>) => {
    const next = e.relatedTarget as Node | null;

    if (next && wrapperRef.current?.contains(next)) return;

    setIsFocused(false);
    setShowSuggestions?.(false);
    handleBlur?.();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && hasSuggestions) {
      e.preventDefault();
      widgetItemsRefs.current[0]?.focus();
    }
  };

  const borderClasses = classNames(
    "rounded-xs border transition-colors",
    hasError
      ? "border-error focus-within:border-error"
      : "border-stroke-default focus-within:border-brand-primary",
    isFocused && !hasError && "border-brand-primary",
    isFocused && hasError && "border-error"
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
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      onKeyDown={handleInputKeyDown}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
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
      aria-autocomplete="list"
      aria-expanded={hasSuggestions}
      aria-controls={hasSuggestions ? listboxId : undefined}
      role="combobox"
    />
  );

  return (
    <div ref={wrapperRef}>
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

      {hasSuggestions ? (
        <ul
          id={listboxId}
          role="listbox"
          onBlur={handleListBlur}
          className="mt-1 rounded-xs border border-stroke-default bg-bg-primary"
        >
          {autocompleteSuggestions.map((suggestion, i) => {
            const isSelected = suggestion.value === value;

            return (
              <li
                key={suggestion.id}
                ref={(node) => {
                  widgetItemsRefs.current[i] = node;
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSuggestionClick(suggestion)}
                onKeyDown={handleSuggestionKeyDown}
                className={classNames(
                  "cursor-pointer px-4 py-2 outline-none",
                  "hover:bg-bg-muted",
                  "focus:bg-bg-muted"
                )}
              >
                {suggestion.value}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
