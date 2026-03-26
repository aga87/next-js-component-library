"use client";

import { useState } from "react";

export const useTextInputWithAutocomplete = <
  T extends { id: string; value: string },
>(
  initialValue = "",
  validateField?: (value: string) => void
) => {
  const [value, setValue] = useState(initialValue);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: T) => {
    setValue(suggestion.value);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    validateField?.(value);
  };

  const reset = () => {
    setValue(initialValue);
    setShowSuggestions(false);
  };

  return {
    value,
    setValue,
    showSuggestions,
    setShowSuggestions,
    handleChange,
    handleSuggestionClick,
    handleBlur,
    reset,
  };
};
