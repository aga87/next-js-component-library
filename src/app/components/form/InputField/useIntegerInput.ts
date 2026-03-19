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

export const useIntegerInput = (
  initialValue = "",
  validateField?: (value: string) => void
) => {
  const [value, setValue] = useState(initialValue);

  const sanitize = (input: string) => {
    // allow digits and minus
    let cleaned = input.replace(/[^\d-]/g, "");

    // only one minus, and only at the start
    if (cleaned.includes("-")) {
      cleaned = cleaned.replace(/-/g, "");
      cleaned = "-" + cleaned;
    }

    return cleaned;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(sanitize(e.target.value));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) return;

    // allow navigation + digits
    if (ALLOWED_KEYS.has(e.key) || /^\d$/.test(e.key)) return;

    // allow minus only at start and only once
    if (e.key === "-") {
      if (value.includes("-")) {
        e.preventDefault();
        return;
      }

      const input = e.currentTarget;
      const isAtStart = input.selectionStart === 0;

      if (!isAtStart) {
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
