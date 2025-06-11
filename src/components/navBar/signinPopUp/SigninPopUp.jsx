import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const SignInPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      GetUserProfile(codeResp);
      
    },
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        console.log("User info:", res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        setShowLogin(false);
        window.location.reload();})
      .catch((error) => {
        console.error("Error fetching user info", error);
      });
  };


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
        {/* <button
          onClick={login}
          className='w-full bg-[#180e11] hover:bg-[#4b2e37] text-center p-2 text-white rounded-md  cursor-pointer flex items-center justify-center gap-3 font-bold'>
          <FcGoogle className='text-xl' />
          Login with Google
        </button> */}
        <div className='login-popup-inputs'>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type='text' placeholder='Your Name' className='' />
          )}
          <input type='email' placeholder='Your email address' className='' />
          <input type='password' placeholder='Your Password' className='' />
          <button className='w-full bg-[#4b2e37] p-2 text-white rounded-md hover:bg-amber-300 cursor-pointer font-bold'>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <button
            onClick={login}
            className='w-full bg-[#180e11] hover:bg-[#4b2e37] text-center p-2 text-white rounded-md  cursor-pointer flex items-center justify-center gap-3 font-bold'>
            <FcGoogle className='text-xl' />
            Login with Google
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
