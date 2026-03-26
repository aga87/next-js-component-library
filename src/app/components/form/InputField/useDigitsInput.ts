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

export const useDigitsInput = (
  initialValue = "",
  validateField?: (value: string) => void
) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    setValue(digitsOnly);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) return;

    if (ALLOWED_KEYS.has(e.key) || /^\d$/.test(e.key)) return;

    e.preventDefault();
  };

  const handleBlur = () => {
    if (validateField) {
      validateField(value);
    }
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
