import React from 'react';
import './ForgotPassword.css'
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {


const history = useNavigate()
const addData = (e)=>{
    e.preventDefault()
    history('/')
}

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
          <span className="formTitle">
            Forgot Password
          </span>
            <input
              type="email"
              placeholder="Enter Email"
              className="loginInput"
              name="email"
            //   onChange={getData}
            />
            <input
              type="password"
              placeholder="New Password"
              className="loginInput"
              name="password"
            //   onChange={getData}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="loginInput"
              name="password"
            //   onChange={getData}
            />

            <button className="loginButton" 
            onClick={addData} 
            type="submit">
              Submit
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;