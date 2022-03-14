import React from "react";
import "./ThemedButton.scss";

const ThemedButton = ({ message, colorTheme, handleClick }) => {
  const className = `${colorTheme}__btn`;
  return (
    <button className={className} onClick={handleClick}>
      {message}
    </button>
  );
};

export default ThemedButton;
