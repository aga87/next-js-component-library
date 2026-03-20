"use client";

import { useState } from "react";

export const useColorPicker = (
  initialValues: string[] = [],
  validateField?: (value: string[]) => void
) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(initialValues);

  const toggleValue = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleBlur = () => {
    if (validateField) {
      validateField(selectedValues);
    }
  };

  const isSelected = (value: string) => {
    return selectedValues.includes(value);
  };

  const clear = () => setSelectedValues([]);

  return {
    selectedValues,
    toggleValue,
    handleBlur,
    isSelected,
    clear,
  };
};
