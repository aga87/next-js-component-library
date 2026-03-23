"use client";

import { useState } from "react";

export const useCheckboxGroup = (initialValue: string[] = []) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedValues((prev) => {
      if (checked) {
        return prev.includes(value) ? prev : [...prev, value];
      }

      return prev.filter((v) => v !== value);
    });
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return {
    selectedValues,
    isTouched,
    handleCheckboxChange,
    handleBlur,
  };
};
