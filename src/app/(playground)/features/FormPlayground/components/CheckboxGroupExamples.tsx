"use client";

import { CheckboxGroup, useCheckboxGroup } from "@/app/components";

const options = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "phone", label: "Phone" },
];

export const CheckboxGroupExampleBasic = () => {
  const { selectedValues, handleCheckboxChange } = useCheckboxGroup();

  return (
    <CheckboxGroup
      name="contact"
      legend="Preferred contact methods"
      options={options}
      value={selectedValues}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export const CheckboxGroupExampleRequired = () => {
  const { selectedValues, isTouched, handleCheckboxChange, handleBlur } =
    useCheckboxGroup();

  return (
    <CheckboxGroup
      name="contact"
      legend="Preferred contact methods"
      options={options}
      value={selectedValues}
      handleCheckboxChange={handleCheckboxChange}
      onBlur={handleBlur}
      isRequired
      error={
        isTouched && selectedValues.length === 0
          ? "Select at least one option"
          : undefined
      }
    />
  );
};

export const CheckboxGroupExampleWithDescription = () => {
  const { selectedValues, handleCheckboxChange } = useCheckboxGroup();

  return (
    <CheckboxGroup
      name="contact"
      legend="Preferred contact methods"
      description="Choose all that apply."
      options={options}
      value={selectedValues}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export const CheckboxGroupExampleDisabledOptions = () => {
  const { selectedValues, handleCheckboxChange } = useCheckboxGroup();

  return (
    <CheckboxGroup
      name="contact"
      legend="Preferred contact methods"
      options={[
        { value: "email", label: "Email" },
        { value: "sms", label: "SMS", isDisabled: true },
        { value: "phone", label: "Phone" },
      ]}
      value={selectedValues}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export const CheckboxGroupExampleDefaultValues = () => {
  const { selectedValues, handleCheckboxChange } = useCheckboxGroup(["email"]);

  return (
    <CheckboxGroup
      name="contact"
      legend="Preferred contact methods"
      options={options}
      value={selectedValues}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};
