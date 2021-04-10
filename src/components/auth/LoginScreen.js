import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div>
      <h3 className="auth__title">Login</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <button class="loginBtn loginBtn-facebook">
            Login with Facebook
          </button>
          <button class="loginBtn loginBtn-google">Login with Google</button>
        </div>
        <Link to="/auth/register">Create a new account</Link>
      </form>
    </div>
  );
};

export default LoginScreen;
