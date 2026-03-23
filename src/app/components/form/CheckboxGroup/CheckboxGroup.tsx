import { Checkbox } from "../Checkbox/Checkbox";
import { Fieldset } from "../Fieldset";

export type CheckboxGroupOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type CheckboxGroupProps = {
  name: string;
  legend: string;
  options: CheckboxGroupOption[];
  value: string[];
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  description?: string;
  error?: string;
  onBlur?: React.FocusEventHandler<HTMLFieldSetElement>;
};

export const CheckboxGroup = ({
  name,
  legend,
  options,
  value,
  handleCheckboxChange,
  isRequired = false,
  description,
  error,
  onBlur,
}: CheckboxGroupProps) => {
  return (
    <Fieldset
      legend={legend}
      isRequired={isRequired}
      description={description}
      error={error}
      onBlur={onBlur}
    >
      <div className="space-y-2">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name={name}
            value={option.value}
            isChecked={value.includes(option.value)}
            isDisabled={option.isDisabled}
            handleChange={handleCheckboxChange}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>
    </Fieldset>
  );
};
