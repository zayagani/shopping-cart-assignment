import React from "react";
import "../Button/button.scss";

const Button = ({ handleClick, type,children, ...otherProps }) => {
  return (
    <React.Fragment>
    <button
      onClick={handleClick}
      className={`${type}-button`}
      {...otherProps}>
      {children}
    </button>
    </React.Fragment>
  );
};

export default Button;