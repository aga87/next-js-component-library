"use client";

import { useState } from "react";

export const useTextInput = (
  initialValue = "",
  validateField?: (value: string) => void
) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (validateField) {
      validateField(value);
    }
  };

  return {
    value,
    // For edge cases where we want to set the value without triggering a change event
    setValue,
    handleChange,
    handleBlur,
  };
};
