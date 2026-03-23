import { ReactNode } from "react";
import { classNames } from "@/app/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  appearance?: "solid" | "outline";
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  appearance = "solid",
  full = false,
  disabled = false,
  onClick,
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

  const disabledStyles =
    "bg-bg-muted text-text-disabled border-stroke-default cursor-not-allowed";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        base,
        disabled ? disabledStyles : styles[variant][appearance],
        full && "w-full",
        !disabled && "cursor-pointer"
      )}
    >
      {children}
    </button>
  );
};
