type LabelProps = {
  inputId: string;
  label: string;
  isRequired: boolean;
  icon?: React.ReactNode;
};

export const Label = ({ inputId, label, isRequired, icon }: LabelProps) => {
  return (
    <label
      htmlFor={inputId}
      className="bg-bg-primary text-sm leading-tight pt-3 pl-4"
    >
      <span className="flex items-center gap-x-1">
        <span>{label}</span>

        {icon ? <span>{icon}</span> : null}

        {isRequired ? <span>*</span> : null}
      </span>
    </label>
  );
};
