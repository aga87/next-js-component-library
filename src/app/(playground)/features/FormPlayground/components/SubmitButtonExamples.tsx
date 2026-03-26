"use client";

import { SubmitButton, Form } from "@/app/components";
import { useState } from "react";

export const SubmitButtonExampleBasic = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const SubmitButtonExampleLoading = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <SubmitButton
        variant="secondary"
        isLoading={isSubmitting}
        loadingText="Saving..."
      >
        Save changes
      </SubmitButton>
    </Form>
  );
};

export const SubmitButtonExampleExternal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Form id="example-form" handleSubmit={handleSubmit}>
        <p className="text-sm">Form content here</p>
      </Form>

      <SubmitButton
        variant="primary"
        appearance="outline"
        formId="example-form"
        isLoading={isSubmitting}
      >
        Submit outside form
      </SubmitButton>
    </>
  );
};
