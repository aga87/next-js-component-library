import { ReactNode } from "react";
import { classNames } from "@/app/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  full = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary active:translate-y-px";

  const enabledVariants = {
    primary:
      "bg-brand-primary text-white border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary",
    secondary:
      "bg-bg-primary text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white",
  };

  const disabledVariants = {
    primary:
      "bg-bg-muted text-text-disabled border-stroke-default cursor-not-allowed",
    secondary:
      "bg-bg-muted text-text-disabled border-stroke-default cursor-not-allowed",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        base,
        disabled ? disabledVariants[variant] : enabledVariants[variant],
        full ? "w-full" : "",
        !disabled ? "cursor-pointer" : ""
      )}
    >
      {children}
    </button>
  );
};
