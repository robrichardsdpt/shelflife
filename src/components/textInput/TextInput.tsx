import { ChangeEventHandler } from "react";
import "./TextInput.scss";

type TextInputProps = {
  inputType: string;
  className: string;
  valueString: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

const TextInput = ({
  inputType,
  className,
  valueString,
  handleChange,
  placeholder,
}: TextInputProps) => {
  return (
    <div className={"input-container"}>
      <label className={`${valueString !== "" ? " filled" : ""}`}>
        {placeholder}
      </label>
      <input
        type={inputType}
        className={className}
        value={valueString}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
