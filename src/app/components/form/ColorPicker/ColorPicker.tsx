import { useId } from "react";
import classNames from "classnames";
import { Fieldset } from "../Fieldset";

type ColorOption = {
  value: string;
  label: string;
  colorHex: string;
};

type ColorOptionProps = {
  name: string;
  option: ColorOption;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ColorOption = ({ name, option, checked, onChange }: ColorOptionProps) => {
  const inputId = useId();

  return (
    <li>
      <label htmlFor={inputId} className="block">
        <input
          id={inputId}
          name={name}
          type="checkbox"
          value={option.value}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />

        <span className="sr-only">{option.label}</span>

        <span
          aria-hidden="true"
          title={option.label}
          className={classNames(
            "flex h-9 w-9 items-center justify-center rounded-full transition",
            "bg-bg-primary border",

            // base border
            checked ? "border-2 border-brand-primary" : "border-border-default",

            // hover (only when not selected)
            !checked && "hover:border-brand-primary/40",

            // focus (same pattern as radio)
            "peer-focus-visible:outline-none",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary peer-focus-visible:ring-offset-2"
          )}
        >
          <span
            className="h-7 w-7 rounded-full border border-black/10"
            style={{ backgroundColor: option.colorHex }}
          />
        </span>
      </label>
    </li>
  );
};

export type ColorPickerProps = {
  label: string;
  colorOptions: ColorOption[];
  value: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  description?: string;
};

export const ColorPicker = ({
  label,
  colorOptions,
  value,
  handleChange,
  name = "colors",
  description,
}: ColorPickerProps) => {
  const descriptionId = useId();

  return (
    <Fieldset legend={label} description={description}>
      <ul
        className="flex flex-wrap items-center gap-3"
        aria-describedby={description ? descriptionId : undefined}
      >
        {colorOptions.map((option) => (
          <ColorOption
            key={option.value}
            name={name}
            option={option}
            checked={value.includes(option.value)}
            onChange={handleChange}
          />
        ))}
      </ul>
    </Fieldset>
  );
};
