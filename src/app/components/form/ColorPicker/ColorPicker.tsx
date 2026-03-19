import { useId } from "react";
import classNames from "classnames";

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
            "flex h-9 w-9 items-center justify-center rounded-full border transition",
            "border-border-default bg-bg-primary",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary peer-focus-visible:ring-offset-2",
            checked
              ? "ring-2 ring-brand-primary ring-offset-2"
              : "hover:border-brand-primary/40"
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
    <fieldset
      aria-describedby={description ? descriptionId : undefined}
      className="space-y-3"
    >
      <legend className="text-sm font-medium text-text-primary">{label}</legend>

      {description ? (
        <p id={descriptionId} className="text-sm text-text-secondary">
          {description}
        </p>
      ) : null}

      <ul className="flex flex-wrap items-center gap-3">
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
    </fieldset>
  );
};
