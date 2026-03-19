import { ReactNode } from "react";

type TextOverlayProps = {
  children: ReactNode;
  label: string;
  isVisible: boolean;
};

export const TextOverlay = ({
  children,
  label,
  isVisible,
}: TextOverlayProps) => {
  return (
    <div className="relative">
      {children}

      {isVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-muted/30 backdrop-blur-sm">
          <p className="text-brand-primary text-xl font-semibold">{label}</p>
        </div>
      )}
    </div>
  );
};
