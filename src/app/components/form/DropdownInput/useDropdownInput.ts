"use client";

import { useState } from "react";

export const useDropdownInput = (
  initialValue = "",
  validateField?: (value: string) => string | void
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>("");

  const handleChange = (nextValue: string) => {
    setValue(nextValue);
    setError(""); // clear error on change
  };

  const handleBlur = () => {
    if (!validateField) return;

    const result = validateField(value);

    if (typeof result === "string") {
      setError(result);
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError("");
  };

  return {
    value,
    setValue,
    error,
    setError,
    handleChange,
    handleBlur,
    reset,
  };
};
