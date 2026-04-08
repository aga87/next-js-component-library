import { ReactNode } from "react";
import { classNames } from "@/app/utils";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  appearance?: "solid" | "outline";
  full?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type SubmitButtonProps = ButtonBaseProps & {
  type?: "submit";
  formId?: string;
  isLoading?: boolean;
  loadingText?: string;
};

type RegularButtonProps = ButtonBaseProps & {
  type?: "button";
  formId?: never;
  isLoading?: never;
  loadingText?: never;
};

type ButtonProps = SubmitButtonProps | RegularButtonProps;

export const Button = ({
  children,
  variant = "primary",
  appearance = "solid",
  type = "button",
  full = false,
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary active:translate-y-px";

  const styles = {
    primary: {
      solid: "bg-brand-accent text-white border-brand-accent hover:opacity-90",
      outline:
        "bg-bg-primary text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white",
    },
    secondary: {
      solid:
        "bg-brand-primary text-white border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary",
      outline:
        "bg-bg-primary text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white",
    },
  };

  const isLoading = type === "submit" ? (rest.isLoading ?? false) : false;
  const loadingText =
    type === "submit" ? (rest.loadingText ?? "Submitting...") : undefined;
  const formId = type === "submit" ? rest.formId : undefined;

  const isDisabled = disabled || isLoading;

  const disabledStyles =
    "bg-bg-muted text-text-disabled border-stroke-default cursor-not-allowed";

  return (
    <button
      type={type}
      form={type === "submit" ? formId : undefined}
      disabled={isDisabled}
      onClick={onClick}
      aria-busy={type === "submit" && isLoading ? true : undefined}
      className={classNames(
        base,
        isDisabled ? disabledStyles : styles[variant][appearance],
        full && "w-full",
        !isDisabled && "cursor-pointer"
      )}
    >
      {type === "submit" && isLoading ? loadingText : children}
    </button>
  );
};
