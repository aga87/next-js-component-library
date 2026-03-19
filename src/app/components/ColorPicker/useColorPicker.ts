"use client";

import { useState } from "react";

export const useColorPicker = (initial: string[] = []) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(initial);

  const toggleValue = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const isSelected = (value: string) => {
    return selectedValues.includes(value);
  };

  const clear = () => setSelectedValues([]);

  return {
    selectedValues,
    toggleValue,
    isSelected,
    clear,
  };
};
