import React from "react";
import "../Inputs/inputs.scss";

const Inputs = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={`${props.value.length ? "shrink" : ""}
            form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Inputs;