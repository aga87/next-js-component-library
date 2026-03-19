"use client";

import { DropdownInput, useDropdownInput } from "@/app/components";

const options = ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven"];

export const DropdownInputExample = () => {
  const { value, handleChange } = useDropdownInput("");

  return (
    <DropdownInput
      label="City"
      options={options}
      selectedItem={value}
      handleOptionChange={handleChange}
      isRequired={false}
    />
  );
};

export const DropdownInputExampleWithDefault = () => {
  const { value, handleChange } = useDropdownInput("Amsterdam");

  return (
    <DropdownInput
      label="City"
      options={options}
      selectedItem={value}
      handleOptionChange={handleChange}
      isRequired={false}
    />
  );
};

const validateCity = (value: string) => {
  if (!value) return "This field is required";
  return "";
};

export const DropdownInputExampleWithValidation = () => {
  const { value, error, handleChange, handleBlur } = useDropdownInput(
    "",
    validateCity
  );

  return (
    <DropdownInput
      label="City"
      options={options}
      selectedItem={value}
      handleOptionChange={handleChange}
      handleBlur={handleBlur}
      errorMsg={error}
      isRequired
    />
  );
};

export const DropdownInputExampleInsideLabel = () => {
  const { value, handleChange } = useDropdownInput("");

  return (
    <DropdownInput
      label="City"
      options={options}
      selectedItem={value}
      handleOptionChange={handleChange}
      isRequired={false}
      labelVariant="inside"
    />
  );
};
