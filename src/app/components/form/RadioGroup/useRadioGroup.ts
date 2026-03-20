"use client";

import { useState } from "react";

export const useRadioGroup = <T extends string | number>(
  initialValue?: T,
  validateField?: (value: T | undefined) => void
) => {
  const [value, setValue] = useState<T | undefined>(initialValue);

  const handleChange = (nextValue: T) => {
    setValue(nextValue);
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
    handleBlur,
    reset,
  };
};
