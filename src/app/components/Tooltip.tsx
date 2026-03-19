"use client";

import { ReactNode, useId } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

type TooltipProps = {
  content: ReactNode;
  children?: ReactNode;
  openOnClick?: boolean;
};

export const Tooltip = ({
  content,
  children,
  openOnClick = false,
}: TooltipProps) => {
  const id = useId();
  const hasCustomTrigger = Boolean(children);

  return (
    <>
      <span
        data-tooltip-id={id}
        className={
          hasCustomTrigger
            ? "inline-flex items-center gap-1 cursor-help underline decoration-dotted decoration-brand-primary underline-offset-4"
            : "inline-flex items-center cursor-help text-brand-primary"
        }
      >
        {children ?? <InformationCircleIcon className="h-5 w-5" />}
      </span>

      <ReactTooltip
        id={id}
        place="top"
        opacity={1}
        openOnClick={openOnClick}
        className="max-w-xs rounded-md text-xs! px-3 py-2 text-white bg-bg-secondary! shadow-md"
      >
        {content}
      </ReactTooltip>
    </>
  );
};
