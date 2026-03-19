"use client";

import { useState, type ChangeEvent, type KeyboardEvent } from "react";

const ALLOWED_KEYS = new Set([
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "Tab",
  "Enter",
  "Escape",
]);

export const useDecimalInput = (
  initialValue = "",
  validateField?: (value: string) => void
) => {
  const [value, setValue] = useState(initialValue);

  const sanitize = (input: string) => {
    let cleaned = input.replace(/[^\d.-]/g, "");

    const isNegative = cleaned.startsWith("-");
    cleaned = cleaned.replace(/-/g, "");

    const parts = cleaned.split(".");
    const integerPart = parts[0] ?? "";
    const decimalPart = parts.slice(1).join("");

    let result = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;

    if (cleaned.includes(".")) {
      result = `${integerPart}.${decimalPart}`;
    }

    if (isNegative) {
      result = `-${result}`;
    }

    return result;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(sanitize(e.target.value));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) return;

    if (ALLOWED_KEYS.has(e.key) || /^\d$/.test(e.key)) return;

    const input = e.currentTarget;
    const currentValue = input.value;
    const selectionStart = input.selectionStart ?? 0;

    if (e.key === "-") {
      if (currentValue.includes("-") || selectionStart !== 0) {
        e.preventDefault();
      }
      return;
    }

    if (e.key === ".") {
      if (currentValue.includes(".")) {
        e.preventDefault();
      }
      return;
    }

    e.preventDefault();
  };

  const handleBlur = () => {
    validateField?.(value);
  };

  const reset = () => setValue(initialValue);

  return {
    value,
    setValue,
    handleChange,
    handleKeyDown,
    handleBlur,
    reset,
  };
};
