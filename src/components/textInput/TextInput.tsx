import { ChangeEventHandler } from "react";

type TextInputProps = {
  inputType: string;
  className: string;
  valueString: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  errorState?: Error;
};

const TextInput = ({
  inputType,
  className,
  valueString,
  handleChange,
  placeholder,
  errorState,
}: TextInputProps) => {
  return (
    <input
      type={inputType}
      className={className}
      value={valueString}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
