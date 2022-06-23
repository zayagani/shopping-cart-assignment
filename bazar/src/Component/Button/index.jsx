import React from "react";
import "../Button/button.scss";

const Button = ({ children, type, ...otherProps }) => {
  return (
    <button className={`${type}-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;