import React from "react";
import FormSideMenu from "../Forms/FormSideMenu";
import SignupForm from "../Forms/SignupForm";
const Signup = () => {
  return (
    <div class="signUpContainer">
      <FormSideMenu
        heading={"Already have an account?"}
        paragraph={"Login to access the information and resources"}
        btnValue="Login"
        btnHref={"../login"}
      />
      <SignupForm />
    </div>
  );
};

export default Signup;
