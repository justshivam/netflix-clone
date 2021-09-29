import React from "react";
import "./SignInScreen.css";

function SignInScreen() {
  return (
    <div className="signInScreen">
      <form action="">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signInScreen__gray">New to Netflix?</span>
          <span className="signInScreen__link"> Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
