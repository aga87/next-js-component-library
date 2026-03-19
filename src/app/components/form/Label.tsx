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
      className="block bg-bg-primary text-sm leading-tight pl-4"
    >
      <span className="flex items-center gap-x-1">
        <span>{label}</span>

        {icon ? <span>{icon}</span> : null}

        {isRequired ? <span>*</span> : null}
      </span>
    </label>
  );
};
