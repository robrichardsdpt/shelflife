import React from "react";

const TextInput = ({
  inputType,
  className,
  email,
  handleChange,
  placeholder,
}) => {
  return (
    <input
      type={inputType}
      className={className}
      value={email}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
