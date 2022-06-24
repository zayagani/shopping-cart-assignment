import React from "react";
import "../Button/button.scss";

const Button = ({ handleClick, type,children, ...otherProps }) => {
  return (
    <button
      onClick={handleClick}
      className={`${type}-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;