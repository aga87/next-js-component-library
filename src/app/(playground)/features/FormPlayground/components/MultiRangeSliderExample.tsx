"use client";

import { MultiRangeSlider, useMultiRangeSlider } from "@/app/components";

export const MultiRangeSliderExample = () => {
  const min = 0;
  const max = 500;

  const { selectedMin, selectedMax, handleMinChange, handleMaxChange } =
    useMultiRangeSlider(min, max);

  return (
    <MultiRangeSlider
      label="Price range"
      name="price"
      min={min}
      max={max}
      value={[selectedMin, selectedMax]}
      handleMinChange={handleMinChange(selectedMax)}
      handleMaxChange={handleMaxChange(selectedMin)}
    />
  );
};
