"use client";

import { useId } from "react";
import "./multi-range-slider.css";

type RangeInputLabelProps = {
  inputId: string;
  rangeLabel: string;
  valueLabel: string;
};

const RangeInputLabel = ({
  inputId,
  rangeLabel,
  valueLabel,
}: RangeInputLabelProps) => {
  return (
    <label htmlFor={inputId} className="py-2 px-4 border border-gray-100">
      <span className="block text-xs mb-1">{rangeLabel}</span>
      <span className="font-sans text-base">
        {/* Note: These two <span> elements are necessary for the Google Translate browser extension to work correctly */}
        <span>{valueLabel}</span> <span>€</span>
      </span>
    </label>
  );
};

type RangeInputProps = {
  id: string;
  min: number;
  max: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeInput = ({ min, max, value, handleChange }: RangeInputProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      className="thumb thumb--left"
    />
  );
};

export type MultiRangeSliderProps = {
  name: string;
  label: string;
  min: number;
  max: number;
  value: [number, number];
  handleMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MultiRangeSlider = ({
  name,
  label,
  min,
  max,
  value,
  handleMinChange,
  handleMaxChange,
}: MultiRangeSliderProps) => {
  const inputId = useId();
  const minInputId = `${inputId}-min`;
  const maxInputId = `${inputId}-max`;

  const minPercent = ((value[0] - min) / (max - min)) * 100;
  const maxPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <fieldset className="mt-2">
      <legend className="sr-only">{label}</legend>
      <div className="container mb-6">
        <RangeInput
          id={minInputId}
          min={min}
          max={max}
          value={value[0]}
          handleChange={handleMinChange}
        />
        <RangeInput
          id={maxInputId}
          min={min}
          max={max}
          value={value[1]}
          handleChange={handleMaxChange}
        />

        {/* Slider line */}
        <div className="slider">
          <div className="slider__track" />
          <div
            className="slider__range"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <RangeInputLabel
          inputId={minInputId}
          rangeLabel={`Min. ${name}`}
          valueLabel={`${value[0]}`}
        />
        <RangeInputLabel
          inputId={maxInputId}
          rangeLabel={`Max. ${name}`}
          valueLabel={`${value[1]}`}
        />
      </div>
    </fieldset>
  );
};
