import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const SignInPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <div className='login-popup-container'>
        <div className='login-popup-title'>
          <h2 className='font-bold'> {currState} </h2>
          <RxCross2
            onClick={() => setShowLogin(false)}
            className='cursor-pointer text-2xl font-extrabold '
          />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type='text' placeholder='Your Name' className='' />
          )}
          <input type='email' placeholder='Your email address' className='' />
          <input type='password' placeholder='Your Password' className='' />
          <button className='w-full bg-[#4b2e37] p-2 text-white rounded-md hover:bg-accent-dark cursor-pointer font-bold'>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className='login-popup-condition'>
            <input type='checkbox' name='' id='' />
            <p>By continuing this,I agree with terms & conditions</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurrState("Login")}>Click Here</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPopUp;
