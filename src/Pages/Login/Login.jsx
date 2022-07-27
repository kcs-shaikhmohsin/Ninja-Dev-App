import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [inpval, setInpVal] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    // console.log(e.target.value)
    const { value, name } = e.target;

    setInpVal(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("UserDetails");
    console.log(getUserArr);

    const { email, password } = inpval;
    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please provide a valid Email ID");
    } else if (password === "") {
      alert("Plese Enter Password!");
    } else if (password.length < 5) {
      alert("Password length should be Greater than 5!");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userlogin = userData.filter((ele, index) => {
          return ele.email === email && ele.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("User successfuly login");
          // localStorage.setItem("logged_user", JSON.stringify(getUserArr))
          // history("/details");
        }
      }
    }
  };

  const history = useNavigate();
  const goToSignup = (e) => {
    e.preventDefault();
    history("/sigup");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ninja-Dev-App</h3>
          <span className="loginDesc">
            Enjoy with lots of features using the Ninja-Dev-App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              type="email"
              placeholder="Enter Email"
              className="loginInput"
              name="email"
              onChange={getData}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="loginInput"
              name="password"
              onChange={getData}
            />
            <button className="loginButton" onClick={addData} type="submit">
              Log In
            </button>
            <span className="loginForgot"><Link to='/forgot_passwd'> Forgot Password ?</Link></span>
            <button className="loginRegisterButton" onClick={goToSignup}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
