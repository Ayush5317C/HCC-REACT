import React, { useState } from "react";
import { FormRow } from "./LoginForm";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";
import EyeIcon from "../Icons/EyeIcon";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="SignupForm">
      <form action="/signup" method="post" class="logSignUpForm">
        <h1 style={{ margin: "1.5rem 0" }}>Sign Up</h1>
        {/* <p style="text-align: center;"><%=typeof flashMessage!=='undefined'?flashMessage:""%></p> */}
        {/* <%-include('../components/userDetailFormFields',{fullName:locals.fullName,email:locals.email,phoneNumber:locals.phoneNumber})%> */}
        <FormRow placeholder={"Enter your full name"} inputType={"text"} />
        <FormRow placeholder={"Enter your email"} inputType={"email"} />
        <FormRow
          placeholder={"Enter your phone number"}
          inputType={"text"}
          maxLength={10}
        />
        <FormRow
          placeholder={"Enter your password"}
          inputType={showPassword ? "text" : "password"}
        >
          <EyeIcon
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </FormRow>
        <FormRow
          placeholder={"Confirm your password"}
          inputType={showConfirmPassword ? "text" : "password"}
        >
          <EyeIcon
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />
        </FormRow>
        <div class="confirmPasswordMsg">
          Please make sure your passwords match
        </div>
        {/* <button type="button" class="btn mainFormBtn" onclick="validateAndSubmit(this.parentNode)">SignUp</button> */}
        <Button value={"Sign Up"} className={"mainFormBtn"} />
        <p class="loginInsteadLine">
          <span> Already have an account? </span>
          <Link to="../login" style={{ textDecoration: "underline" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
