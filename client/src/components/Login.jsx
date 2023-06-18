import React from "react";
import FormSideMenu from "./FormSideMenu";
import LoginForm from "./LoginForm";
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
