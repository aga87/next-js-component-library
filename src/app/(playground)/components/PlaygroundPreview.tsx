import { ReactNode } from "react";
import { classNames } from "@/app/utils";

type PlaygroundPreviewProps = {
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export const PlaygroundPreview = ({
  children,
  orientation = "horizontal",
}: PlaygroundPreviewProps) => {
  return (
    <div
      className={classNames(
        orientation === "horizontal"
          ? "flex items-center gap-3 flex-wrap"
          : "flex flex-col gap-3"
      )}
    >
      {children}
    </div>
  );
};
