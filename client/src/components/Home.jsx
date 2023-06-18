import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <section id="home">
      <div className="landingArea">
        <div className="landingContent">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam
            qui ipsa numquam quaerat officia, ducimus veritatis atque ut est
            modi repellat impedit consequatur
          </p>
          {/* <%if(req.user==undefined){%> */}
          <div className="signInUpBtnContainer" style={{marginTop: '50px'}}>
            <Button className="signUpBtn" href="/signup" value="SignUp"/>
            <Button className={"loginBtn"} href="/login" value="LogIn"/>
          </div>
          {/* <%}%> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
