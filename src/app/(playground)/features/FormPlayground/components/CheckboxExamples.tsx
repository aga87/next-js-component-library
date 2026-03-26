"use client";

import { Checkbox, useCheckbox } from "@/app/components";

export const CheckboxExampleBasic = () => {
  const { isChecked, handleChange } = useCheckbox();

  return (
    <Checkbox
      value="newsletter"
      isChecked={isChecked}
      handleChange={handleChange}
    >
      Subscribe to newsletter
    </Checkbox>
  );
};

export const CheckboxExampleRequired = () => {
  const { isChecked, isTouched, handleChange, handleBlur } = useCheckbox();

  return (
    <Checkbox
      value="terms"
      isChecked={isChecked}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isRequired
      errorMsg={
        isTouched && !isChecked
          ? "You must accept the terms and conditions"
          : undefined
      }
    >
      I agree to the terms and conditions
    </Checkbox>
  );
};

export const CheckboxExampleDisabled = () => {
  const { isChecked, handleChange } = useCheckbox(false);

  return (
    <Checkbox
      value="marketing"
      isChecked={isChecked}
      handleChange={handleChange}
      isDisabled
    >
      Marketing updates unavailable
    </Checkbox>
  );
};
