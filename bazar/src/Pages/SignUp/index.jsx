import React, { useState } from "react";
import "../SignUp/signup.scss";
import Button from "../../Component/Button";
import Inputs from "../../Component/Inputs";

const SignIn = () => {
  const initialFromFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(initialFromFields);
  const { email, password } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  console.log(formFields);

  return (
    <div className="signin-container">
      <div className="signin-heading">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form action="" className="signin-form">
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
        <Button type="sign">Login</Button>
      </form>
    </div>
  );
};

export default SignIn;