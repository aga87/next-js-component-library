// // import { ReactNode } from "react";
// // import { classNames } from "@/app/utils";

// // type ButtonProps = {
// //   children: ReactNode;
// //   variant?: "primary" | "secondary";
// //   full?: boolean;
// //   disabled?: boolean;
// //   onClick?: () => void;
// // };

// // export const Button = ({
// //   children,
// //   variant = "primary",
// //   full = false,
// //   disabled = false,
// //   onClick,
// // }: ButtonProps) => {
// //   const base =
// //     "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

// //   const variants = {
// //     primary:
// //       "bg-brand-primary text-white hover:bg-brand-secondary disabled:bg-bg-muted disabled:text-text-muted",
// //     secondary:
// //       "bg-bg-primary text-brand-primary border border-brand-primary hover:bg-bg-secondary disabled:border-bg-muted disabled:text-text-muted",
// //   };

// //   return (
// //     <button
// //       type="button"
// //       disabled={disabled}
// //       onClick={onClick}
// //       className={classNames(
// //         base,
// //         variants[variant],
// //         full ? "w-full" : "",
// //         disabled ? "cursor-not-allowed" : "cursor-pointer"
// //       )}
// //     >
// //       {children}
// //     </button>
// //   );
// // };

// // import { ReactNode } from "react";
// // import { classNames } from "@/app/utils";

// // type ButtonProps = {
// //   children: ReactNode;
// //   variant?: "primary" | "secondary";
// //   full?: boolean;
// //   disabled?: boolean;
// //   onClick?: () => void;
// // };

// // export const Button = ({
// //   children,
// //   variant = "primary",
// //   full = false,
// //   disabled = false,
// //   onClick,
// // }: ButtonProps) => {
// //   const base =
// //     "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

// //   const variants = {
// //     primary: classNames(
// //       "bg-brand-primary text-white border-brand-primary",
// //       "hover:bg-brand-secondary",
// //       "active:bg-brand-secondary active:scale-[0.98]",
// //       "disabled:bg-bg-muted disabled:text-neutral-200 disabled:border-border-default"
// //     ),

// //     secondary: classNames(
// //       "bg-bg-primary text-brand-primary border-brand-primary",
// //       "hover:bg-brand-primary hover:text-white",
// //       "active:bg-brand-secondary active:text-white active:border-brand-secondary",
// //       "disabled:bg-bg-primary disabled:text-neutral-200 disabled:border-border-default"
// //     ),
// //   };

// //   return (
// //     <button
// //       type="button"
// //       disabled={disabled}
// //       onClick={onClick}
// //       className={classNames(
// //         base,
// //         variants[variant],
// //         full ? "w-full" : "",
// //         disabled ? "cursor-not-allowed" : "cursor-pointer"
// //       )}
// //     >
// //       {children}
// //     </button>
// //   );
// // };

// import { ReactNode } from "react";
// import { classNames } from "@/app/utils";

// type ButtonProps = {
//   children: ReactNode;
//   variant?: "primary" | "secondary";
//   full?: boolean;
//   disabled?: boolean;
//   onClick?: () => void;
// };

// export const Button = ({
//   children,
//   variant = "primary",
//   full = false,
//   disabled = false,
//   onClick,
// }: ButtonProps) => {
//   const base =
//     "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

//   const variants = {
//     primary:
//       "bg-brand-primary text-white border-brand-primary hover:bg-brand-secondary active:scale-[0.98] disabled:bg-bg-muted disabled:text-neutral-200 disabled:border-border-default",

//     secondary:
//       "bg-bg-primary text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white active:scale-[0.98] disabled:bg-bg-primary disabled:text-neutral-200 disabled:border-border-default",
//   };

//   return (
//     <button
//       type="button"
//       disabled={disabled}
//       onClick={onClick}
//       className={classNames(
//         base,
//         variants[variant],
//         full ? "w-full" : "",
//         disabled ? "cursor-not-allowed" : "cursor-pointer"
//       )}
//     >
//       {children}
//     </button>
//   );
// };

// import { ReactNode } from "react";
// import { classNames } from "@/app/utils";

// type ButtonProps = {
//   children: ReactNode;
//   variant?: "primary" | "secondary";
//   full?: boolean;
//   disabled?: boolean;
//   onClick?: () => void;
// };

// export const Button = ({
//   children,
//   variant = "primary",
//   full = false,
//   disabled = false,
//   onClick,
// }: ButtonProps) => {
//   const base =
//     "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

//   const disabledStyles =
//     "disabled:bg-bg-muted disabled:text-bg-secondary disabled:border-border-default disabled:cursor-not-allowed";

//   const variants = {
//     primary:
//       "bg-brand-primary text-white border-brand-primary hover:bg-brand-secondary active:scale-[0.99] active:translate-y-px",

//     secondary:
//       "bg-bg-primary text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white active:scale-[0.99] active:translate-y-px",
//   };

//   return (
//     <button
//       type="button"
//       disabled={disabled}
//       onClick={onClick}
//       className={classNames(
//         base,
//         variants[variant],
//         disabledStyles,
//         full ? "w-full" : "",
//         disabled ? "" : "cursor-pointer"
//       )}
//     >
//       {children}
//     </button>
//   );
// };

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
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

  const disabledStyles =
    "disabled:bg-bg-muted disabled:text-bg-secondary disabled:border-border-default disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-primary text-white border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary hover:text-bg-primary active:bg-bg-primary active:border-brand-secondary active:text-brand-secondary",

    secondary:
      "bg-bg-primary text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white active:bg-brand-secondary active:border-brand-secondary active:text-bg-primary",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        base,
        variants[variant],
        disabledStyles,
        full ? "w-full" : "",
        disabled ? "" : "cursor-pointer"
      )}
    >
      {children}
    </button>
  );
};
