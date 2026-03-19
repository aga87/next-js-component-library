"use client";

import { useMask } from "@react-input/mask";

export const useDateMask = () =>
  useMask({
    mask: "__-__-____",
    replacement: { _: /\d/ },
  });
