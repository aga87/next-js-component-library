import { Button, type SubmitButtonProps } from "../actions/Button";
import { Loader } from "../feedback/Loader";

export const SubmitButton = ({
  children,
  formId,
  isLoading = false,
  loadingText = "Submitting...",
  variant = "primary",
  appearance = "solid",
  full = false,
  disabled = false,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      formId={formId}
      variant={variant}
      appearance={appearance}
      full={full}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2 [&_svg]:h-5 [&_svg]:w-5">
          <Loader />
          <span>{loadingText}</span>
        </span>
      ) : (
        children
      )}
    </Button>
  );
};
