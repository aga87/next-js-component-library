"use client";

import { useState } from "react";

export const useCheckbox = (initial = false) => {
  const [isChecked, setIsChecked] = useState(initial);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return {
    isChecked,
    isTouched,
    handleChange,
    handleBlur,
  };
};
