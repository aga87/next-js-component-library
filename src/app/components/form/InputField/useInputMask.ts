"use client";

// Generic hook for input masking, see implementation example - useDateMask
import { useMask, type MaskOptions } from "@react-input/mask";

export const useInputMask = (options: MaskOptions) => {
  return useMask(options);
};
