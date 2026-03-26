"use client";

import {
  useDecimalInput,
  useDigitsInput,
  useIntegerInput,
  useTextInput,
} from "@/app/components";
import { InputField } from "@/app/components";

export const InputFieldBasicOutsideLabelExample = () => {
  const { value, handleChange, handleBlur } = useTextInput("");

  return (
    <InputField
      type="text"
      name="name"
      label="Full name"
      value={value}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isRequired={false}
      placeholder="Enter your name"
    />
  );
};

export const InputFieldBasicInsideLabelExample = () => {
  const { value, handleChange, handleBlur } = useTextInput("");

  return (
    <InputField
      labelVariant="inside"
      type="text"
      name="name"
      label="Full name"
      value={value}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isRequired={false}
      placeholder="Enter your name"
    />
  );
};

export const InputFieldDigitsBasicExample = () => {
  const { value, handleChange, handleKeyDown, handleBlur } = useDigitsInput("");

  return (
    <InputField
      type="text"
      name="quantity"
      label="Quantity"
      value={value}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handleBlur={handleBlur}
      isRequired={false}
      placeholder="Enter digits only"
    />
  );
};

export const InputFieldIntegerBasicExample = () => {
  const { value, handleChange, handleKeyDown, handleBlur } =
    useIntegerInput("");

  return (
    <InputField
      type="text"
      name="amount"
      label="Amount"
      value={value}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handleBlur={handleBlur}
      isRequired={false}
      placeholder="Enter integer (e.g. -10, 42)"
    />
  );
};

export const InputFieldDecimalBasicExample = () => {
  const { value, handleChange, handleKeyDown, handleBlur } =
    useDecimalInput("");

  return (
    <InputField
      type="text"
      name="price"
      label="Price"
      value={value}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handleBlur={handleBlur}
      isRequired={false}
      placeholder="Enter decimal value (e.g. -12.5)"
    />
  );
};
