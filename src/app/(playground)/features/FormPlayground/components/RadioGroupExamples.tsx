"use client";

import { useState } from "react";
import { RadioGroup, useRadioGroup } from "@/app/components";

const options = [
  { value: "standard", label: "Standard" },
  { value: "express", label: "Express" },
  { value: "overnight", label: "Overnight" },
] as const;

type Shipping = (typeof options)[number]["value"];

export const RadioGroupExampleBasic = () => {
  const { value, handleChange } = useRadioGroup<Shipping>();

  return (
    <RadioGroup
      name="shipping"
      label="Shipping method"
      description="Select a shipping method"
      options={options}
      value={value}
      handleChange={handleChange}
      required
    />
  );
};

export const RadioGroupExampleWithDescriptions = () => {
  const { value, handleChange } = useRadioGroup<Shipping>("standard");

  const optionsWithDescriptions = [
    {
      value: "standard",
      label: "Standard",
      description: "Delivery in 3–5 business days",
    },
    {
      value: "express",
      label: "Express",
      description: "Delivery in 1–2 business days",
    },
    {
      value: "overnight",
      label: "Overnight",
      description: "Next day delivery",
    },
  ] as const;

  return (
    <RadioGroup
      name="shipping-desc"
      label="Shipping method"
      options={optionsWithDescriptions}
      value={value}
      handleChange={handleChange}
      required
    />
  );
};

export const RadioGroupExampleWithValidation = () => {
  const [error, setError] = useState<string | undefined>();

  const { value, handleChange, handleBlur } = useRadioGroup<Shipping>(
    undefined,
    (val) => {
      if (!val) {
        setError("Please select a shipping method");
      } else {
        setError(undefined);
      }
    }
  );

  return (
    <RadioGroup
      name="shipping-validation"
      label="Shipping method"
      options={options}
      value={value}
      handleChange={handleChange}
      handleBlur={handleBlur}
      required
      error={error}
    />
  );
};
