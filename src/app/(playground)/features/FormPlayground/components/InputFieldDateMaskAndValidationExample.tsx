"use client";

import { useState } from "react";
import { InputField, useTextInput, useDateMask } from "@/app/components";
import { validateDOB } from "@/app/utils";

export const InputFieldDateMaskAndValidationExample = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (value: string) => {
    setErrorMsg(validateDOB(value));
  };

  const { value, handleChange, handleBlur } = useTextInput("", validate);
  const dateRef = useDateMask();

  return (
    <InputField
      ref={dateRef}
      type="text"
      name="dateOfBirth"
      label="Date of birth"
      value={value}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isRequired
      placeholder="DD-MM-YYYY"
      errorMsg={errorMsg}
    />
  );
};
