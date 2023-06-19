import React, { useState } from "react";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";
import EyeIcon from "../Icons/EyeIcon";
const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleUserDetailChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="LoginForm">
      <form action="/login" method="post" className="logSignUpForm">
        <div className="userLogo">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <h1>Login</h1>
        {/* <p style="text-align: center;"><%=typeof flashMessage!=='undefined'?flashMessage:""%></p> */}
        <FormRow
          iconClass={"fa fa-user-circle"}
          inputType={"text"}
          placeholder={"Enter your full name"}
          name={"name"}
          inputValue={userDetails.name}
          handleUserDetailChange={handleUserDetailChange}
        />
        <FormRow
          iconClass={"fa fa-lock inputLogo"}
          inputType={showPassword ? "text" : "password"}
          placeholder={"Enter your password"}
          name={"password"}
          inputValue={userDetails.password}
          handleUserDetailChange={handleUserDetailChange}
        >
          <EyeIcon
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </FormRow>
        <Button value={"Login"} className={"mainFormBtn"} />
        <p class="signUpInsteadLine">
          <span> New here? </span>
          <Link to={"../signup"} style={{ textDecoration: "underline" }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

const FormRow = ({
  iconClass,
  inputType,
  placeholder,
  name,
  id,
  children,
  maxLength,
  inputValue,
  handleUserDetailChange,
}) => {
  return (
    <div className="form-row">
      <i className={`fa  inputLogo ${iconClass}`} aria-hidden="true"></i>
      <input
        type={inputType || ""}
        required
        name={name}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        value={inputValue}
        onChange={handleUserDetailChange}
      />
      {children}
    </div>
  );
};

export { FormRow };
export default LoginForm;
