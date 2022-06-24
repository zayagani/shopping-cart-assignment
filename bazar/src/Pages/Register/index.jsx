import React, { useState } from "react";
import "../Register/Register.scss";
import Button from "../../Component/Button";
import Inputs from "../../Component/Inputs";

const Register = () => {
  const inputFromFields = {
    fName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(inputFromFields);
  const { fName, lastName, email, password, confirmPassword } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="register-container">
      <div className="register-heading">
        <h2>Sign Up</h2>
        <p>We do not share your personal details with anyone</p>
      </div>
      <form action="" className="register-form">
        <Inputs
          type="text"
          name="firstName"
          value={fName}
          label="First Name"
          required
          onChange={handleInputChange}
        />
        <Inputs
          type="text"
          name="lastName"
          value={lastName}
          label="Last Name"
          required
          onChange={handleInputChange}
        />
        <Inputs
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleInputChange}
        />
        <Inputs
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleInputChange}
        />
        <Inputs
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={handleInputChange}
        />
        <Button type="sign">SignUp</Button>
      </form>
    </div>
  );
};

export default Register;