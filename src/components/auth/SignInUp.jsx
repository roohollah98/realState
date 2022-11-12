import { FormContext } from "../context/formcontext";
import axios from "axios";
import React, { useContext, useState } from "react";
import "./sign.css";
import img1 from "../../assets/images/log4.svg";
import img2 from "../../assets/images/log2.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthFailure, AuthSuccess } from "../../redux/user/userActions";
import { ThemeContext } from "../context/themeContext";
import BackBtn from "../button/backBtn";

const SignInSignUp = () => {
  const { darkMode } = useContext(ThemeContext);

  const { signUpMode, setSignUpMode } = useContext(FormContext);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = () => {
    axios
      .post("http://localhost:3000/register", {
        email: email,
        password: password,
        username: username,
      })
      .then((res) => {
        console.log(res.data.user);
        navigate("/");
        dispatch(AuthSuccess(res.data.user));
      })
      .catch((error) => {
        console.log("error", error.response.data);

        dispatch(AuthFailure(error.response.data));
      });
  };

  const login = () => {
    axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        navigate("..");
        dispatch(AuthSuccess(res.data.user));
      })
      .catch((error) => {
        console.log("error", error.response.data);
        dispatch(AuthFailure(error.response.data));
      });
  };
  const clearValidates = () => {
    setEmailError(false);
    setUsernameError(false);
    setPasswordError(false);
  };
  const clearInputValues = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };
  const validate = () => {
    
    if (signUpMode) {
      !username ? setUsernameError(true) : setUsernameError(false);
      !email ? setEmailError(true) : setEmailError(false);
      !password ? setPasswordError(true) : setPasswordError(false);
      if (
        username.length > 4 &&
        password.length > 5 &&
        email.includes("@gmail")
      ) {
        clearValidates();
        register();
      }
    } else {
      !email ? setEmailError(true) : setEmailError(false);

      !password ? setPasswordError(true) : setPasswordError(false);

      if (email.includes("@gmail") && password.length > 5) {
        console.log("okeye");
        clearValidates();
        login();
      }
    }
  };
  return (
    <div className={`container ${signUpMode && "sign-up-mode"} ${darkMode &&"dark"}`}>
      <div className="form-container">
        <div className="signInSignUp">
          <form action="" className="signInForm">
            <h2 className="title">Sign in</h2>
            <div className="inputField">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder={`${
                  emailError ? "something wrong with email!" : "Email"
                }`}
              />
            </div>

            <div className="inputField">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder={`${
                  passwordError ? "something wrong with password!" : "Password"
                }`}
              />
            </div>
            <input
              onClick={(e) => {
                e.preventDefault();
                validate();
              }}
              type="submit"
              value="Login"
              className="btn solid"
            />
          </form>

          <form action="" className="signUpForm">
            <h2 className="title">Sign up</h2>
            <div className="inputField">
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder={`${
                  usernameError ? "something wrong with username!" : "Username"
                }`}
              />
            </div>
            <div className="inputField">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder={`${
                  emailError ? "something wrong with email!" : "Email"
                }`}
              />
            </div>
            <div className="inputField">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder={`${
                  passwordError ? "something wrong with password!" : "Password"
                }`}
              />
            </div>

            <input
              onClick={(e) => {
                e.preventDefault();
                validate();
              }}
              type="submit"
              value="Sign Up"
              className="btn solid"
            />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              eius accusamus amet, maxime dicta dolorum!
            </p>
            <button
              onClick={() => {
                setSignUpMode(true);
                clearValidates();
                clearInputValues();
              }}
              className="btn transparent"
              id="sign-up-btn"
            >
              sign Up
            </button>
          </div>
          <img src={img1} />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>one of Us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              eius accusamus amet, maxime dicta dolorum!
            </p>
            <button
              onClick={() => {
                setSignUpMode(false);
                clearValidates();
                clearInputValues();
              }}
              className="btn transparent"
              id="sign-in-btn"
            >
              sign In
            </button>
          </div>
          <img src={img2} />
        </div>
      </div>
      <BackBtn/>
    </div>
  );
};

export default SignInSignUp;
