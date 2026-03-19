"use client";

import { useState } from "react";
import { useTextInput } from "@/app/components";
import { InputField } from "@/app/components";

export const InputFieldWithBlurValidationExample = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (value: string) => {
    if (value.trim().length < 3) {
      setErrorMsg("Must be at least 3 characters");
    } else {
      setErrorMsg("");
    }
  };

  const { value, handleChange, handleBlur } = useTextInput("", validate);

  return (
    <InputField
      type="text"
      name="username"
      label="Username"
      value={value}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isRequired
      placeholder="Enter username"
      errorMsg={errorMsg}
    />
  );
};
