import React, { useState } from "react";
import "./RegisterUser.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const RegisterUser = () => {
  const history = useNavigate();
  const [inpval, setInpVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   const [data, setData] = useState();

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
    const { name, email, password } = inpval;

    if (name === "") {
      alert("Pleae fill User Name");
    } else if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please provide a valid Email ID");
    } else if (password === "") {
      alert("Plese Enter Password!");
    } else if (password.length < 5) {
      alert("Password length should be Greater than 5!");
    } else {
      // console.log("Data added successfully :)")
      localStorage.setItem("UserDetails", JSON.stringify([inpval]));

      history("/");
    }
  };

  return (
    <>
    <Navbar />
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ninja-Dev-App</h3>
          <span className="loginDesc">
          Enjoy the lots of features using the Ninja-Dev-App.
          </span>
        </div>
        <div className="loginRight">
          <form action="" className="loginBox">
            <input
              type="text"
              name="name"
              placeholder="Enter User Name"
              className="loginInput"
              onChange={getData}
            />
            <input
              type="Email"
              name="email"
              placeholder="Enter Email"
              className="loginInput"
              onChange={getData}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="loginInput"
              onChange={getData}
            />
            <button className="loginButton" type="submit" onClick={addData}>
              Sign_Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterUser;
