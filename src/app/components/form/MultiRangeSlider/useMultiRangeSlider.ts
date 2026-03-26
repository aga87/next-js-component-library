"use client";

import { useState } from "react";

export const useMultiRangeSlider = (min: number, max: number) => {
  const [selectedMin, setSelectedMin] = useState(min);
  const [selectedMax, setSelectedMax] = useState(max);

  const handleChange = (newMin: number, newMax: number) => {
    // Ensure the new values are within the min and max range
    if (newMin >= min && newMax <= max && newMin <= newMax) {
      setSelectedMin(newMin);
      setSelectedMax(newMax);
    }
  };

  const handleMinChange =
    (selectedMax: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(parseInt(e.target.value), selectedMax);
    };

  const handleMaxChange =
    (selectedMin: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(selectedMin, parseInt(e.target.value));
    };

  return {
    selectedMin,
    selectedMax,
    handleMinChange,
    handleMaxChange,
  };
};
