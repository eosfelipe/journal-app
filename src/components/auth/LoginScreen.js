import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/login.svg";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"></path>
                </svg>
              </i>
              <input
                className="login__input"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2C9.243,2,7,4.243,7,7v3H6c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2h2h3h2h2h3c1.104,0,2-0.896,2-2v-8 c0-1.104-0.896-2-2-2h-1V7C17,4.243,14.757,2,12,2z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v3H9V7z M13,17.723V20h-2v-2.277 c-0.727-0.422-1.169-1.278-0.939-2.224c0.176-0.72,0.78-1.302,1.506-1.453C12.861,13.774,14,14.753,14,16 C14,16.739,13.596,17.377,13,17.723z"></path>
                </svg>
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
              <span className="login__account">Don't have an Account ?</span>
              <span className="login__signin" id="sign-up">
                Sign Up
              </span>
            </div>
          </form>
          <form className="login__create none">
            <h1 className="login__title">Create Account</h1>
            <div className="login__box">
              <i className="login__icon"></i>
              <input
                type="text"
                placeholder="Username"
                className="login__input"
              />
            </div>
            <div className="login__box">
              <i className="login__icon"></i>
              <input type="text" placeholder="Email" className="login__input" />
            </div>
            <div className="login__box">
              <i className="login__icon"></i>
              <input
                type="password"
                placeholder="Password"
                className="login__input"
              />
            </div>
            <a href="#" className="login__button">
              Sign Up
            </a>
            <div>
              <span className="login__account">Already have an Account ?</span>
              <span className="login__signup" id="sign-in">
                Sign In
              </span>
            </div>
            <div className="login__social">
              <a href="#" className="login__social-icon">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="login__social-icon">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="login__social-icon">
                <i className="bx bxl-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
