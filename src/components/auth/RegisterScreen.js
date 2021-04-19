import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/login.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import { UserIcon, MailIcon, LockClosedIcon } from "@heroicons/react/solid";

const RegisterScreen = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={LoginImg} alt="login-img" />
        </div>
        <div className="login__forms">
          <form className="login__create">
            <h1 className="login__title">Create Account</h1>
            <div className="login__box">
              <i className="login__icon">
                <UserIcon />
              </i>
              <input
                type="text"
                placeholder="Username"
                className="login__input"
              />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <MailIcon />
              </i>
              <input type="text" placeholder="Email" className="login__input" />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <LockClosedIcon />
              </i>
              <input
                type="password"
                placeholder="Password"
                className="login__input"
              />
            </div>
            <button type="submit" className="login__button">
              Sign Up
            </button>
            <div>
              <span className="login__account">Already have an Account? </span>
              <Link className="login__signup" to="/auth/login">
                Sign In
              </Link>
            </div>
            <div className="login__social">
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

export default RegisterScreen;
