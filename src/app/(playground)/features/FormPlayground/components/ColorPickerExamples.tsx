"use client";

import { ColorPicker, useColorPicker } from "@/app/components";

const colorOptions = [
  { value: "blue", label: "Blue", colorHex: "#2563eb" },
  { value: "green", label: "Green", colorHex: "#16a34a" },
  { value: "red", label: "Red", colorHex: "#dc2626" },
  { value: "yellow", label: "Yellow", colorHex: "#eab308" },
  { value: "purple", label: "Purple", colorHex: "#9333ea" },
];

export const ColorPickerExampleBasic = () => {
  const { selectedValues, toggleValue } = useColorPicker();

  return (
    <div className="flex flex-col gap-3">
      <ColorPicker
        label="Choose colors"
        colorOptions={colorOptions}
        value={selectedValues}
        handleChange={(e) => toggleValue(e.target.value)}
      />
      <p className="text-sm text-text-secondary">
        Selected: {selectedValues.join(", ") || "None"}
      </p>
    </div>
  );
};

export const ColorPickerExampleWithDefaultValue = () => {
  const { selectedValues, toggleValue } = useColorPicker(["blue", "green"]);

  return (
    <div className="flex flex-col gap-3">
      <ColorPicker
        label="Choose colors"
        colorOptions={colorOptions}
        value={selectedValues}
        handleChange={(e) => toggleValue(e.target.value)}
      />
      <p className="text-sm text-text-secondary">
        Preselected: {selectedValues.join(", ")}
      </p>
    </div>
  );
};

export const ColorPickerExampleWithDescription = () => {
  const { selectedValues, toggleValue } = useColorPicker();

  return (
    <div className="flex flex-col gap-3">
      <ColorPicker
        label="Filter by color"
        description="Select one or more color options"
        colorOptions={colorOptions}
        value={selectedValues}
        handleChange={(e) => toggleValue(e.target.value)}
      />
      <p className="text-sm text-text-secondary">
        Selected: {selectedValues.join(", ") || "None"}
      </p>
    </div>
  );
};
