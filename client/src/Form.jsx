import React, { useState } from "react";
import "./Form.css";
import sendData from "./service";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let formErrors = {};
    if (!firstName) formErrors.firstName = "First name is required";
    if (!lastName) formErrors.lastName = "Last name is required";
    if (!password) formErrors.password = "Password is required";
    else if (password.length < 8)
      formErrors.password = "Password must be at least 8 characters long";
    if (!confirmPassword)
      formErrors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword)
      formErrors.confirmPassword = "Passwords must match";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const data = {
          firstName: firstName,
          lastName: lastName,
          password: password
        };
        await sendData(data);
        console.log("Data sent successfully");
        alert("Data sent successfully");
        setFirstName("")
        setLastName("")
        setPassword("")
        setConfirmPassword("")

      } catch (error) {
        console.error("Error sending data", error);
      }
      console.log("Form is valid");
    } else {
      console.error("Form is invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-control"

          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div >
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"

          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
