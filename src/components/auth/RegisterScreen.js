import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";

import LoginImg from "../../assets/login.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import { UserIcon, MailIcon, LockClosedIcon } from "@heroicons/react/solid";
import useForm from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Felipe Escobedo",
    email: "escobedo.felipe@hotmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is noty valid"));
      return false;
    } else if (!validator.equals(password, password2)) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={LoginImg} alt="login-img" />
        </div>
        <div className="login__forms">
          <form className="login__create" onSubmit={handleRegister}>
            <h1 className="login__title">Create Account</h1>
            <div className="login__box">
              <i className="login__icon">
                <UserIcon />
              </i>
              <input
                type="text"
                placeholder="Name"
                className="login__input"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <MailIcon />
              </i>
              <input
                type="text"
                placeholder="Email"
                className="login__input"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <LockClosedIcon />
              </i>
              <input
                type="password"
                placeholder="Password"
                className="login__input"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="login__box">
              <i className="login__icon">
                <LockClosedIcon />
              </i>
              <input
                type="password"
                placeholder="Confirm password"
                className="login__input"
                name="password2"
                value={password2}
                onChange={handleInputChange}
              />
            </div>
            {msgError && <span className="auth__alert-error">{msgError}</span>}
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
