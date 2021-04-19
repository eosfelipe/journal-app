import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/login.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import { UserIcon, LockClosedIcon } from "@heroicons/react/solid";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={LoginImg} alt="login-img" />
        </div>
        <div className="login__forms">
          <form className="login__register">
            <h1 className="login__title">Sign In</h1>
            <div className="login__box">
              <i className="login__icon">
                <UserIcon />
              </i>
              <input
                className="login__input"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <LockClosedIcon />
              </i>
              <input
                className="login__input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <Link to="/forgot" className="login__forgot">
              Forgot password?
            </Link>
            <button type="submit" className="login__button">
              Sign In
            </button>
            <div>
              <span className="login__account">Don't have an Account? </span>
              <Link className="login__signin" to="/auth/register">
                Sign Up
              </Link>
            </div>
            <div className="login__social">
              <span className="login__account">Login with social networks</span>
              <a href="https://google.com" className="login__social-icon">
                <GoogleIcon style={{ width: "25px", fill: "#363636" }} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
