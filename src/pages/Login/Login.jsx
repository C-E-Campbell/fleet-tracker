import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

const Login = props => {
  const [userID, setUserID] = useState("");
  const [pass, setPass] = useState("");

  const formHandler = (id, pass, e) => {
    e.preventDefault();
    props.history.push("/dashboard");
  };

  return (
    <div className="login-background">
      <div className="landing-jpg"></div>
      <h1>FleetTrak&#8482;</h1>
      <form
        onSubmit={e => formHandler(userID, pass, e)}
        className="landing-login-form"
      >
        <input
          onChange={e => setUserID(e.target.value)}
          type="text"
          placeholder="Employee ID"
          value={userID}
        />
        <input
          onChange={e => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          value={pass}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
