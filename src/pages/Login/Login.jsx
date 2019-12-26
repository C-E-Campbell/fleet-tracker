import React, { useState } from "react";
import "./Login.scss";

import landingJPG from "../../assets/landing.jpg";
const Login = props => {
  const { userID, setUserID } = useState("");
  const { pass, setPass } = useState("");

  return (
    <div className="login-background">
      <div className="landing-jpg"></div>
      <h1>FleetTrak</h1>
      <form className="landing-login-form">
        <input type="text" placeholder="Employee ID" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
