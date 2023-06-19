import React from "react";
import FormSideMenu from "../Forms/FormSideMenu";
import LoginForm from "../Forms/LoginForm";
const Login = () => {
  return (
    <div className="">
      <FormSideMenu
        heading={"New Here?"}
        paragraph={
          "Unlock a world of knowledge and opportunity with a free account"
        }
        btnValue="Sign Up"
        btnHref={"../signup"}
      />
      <LoginForm />
    </div>
  );
};

export default Login;
