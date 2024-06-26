import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLocaleLowerCase() === "admin@aa.com" && pass === "admin") {
      login({ email, pass });
    } else {
      alert("User information is fail");
    }
  };

  return (
    <div className="text-center loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center">
        <div>
          <span></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase">
            Clarus Store
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-[600] text-[22px]">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label mt-1">
            Enter your credential to access your account
          </p>
        </div>
        <form
          className="flex flex-col text-left p-3 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className='font-montserrat text-labelColor text-label hover:cursor-pointer hover:after:content-["->admin@aa.com"] hover:after:pl-2'
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="login-input"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="pass"
              className='font-montserrat text-labelColor text-label hover:cursor-pointer hover:after:content-["->admin"] hover:after:pl-2'
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
              id="pass"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <button className="bg-main h-[44px] font-montserrat text-label text-white rounded">
            SIGN IN
          </button>
          <p className="flex justify-center items-center flex-wrap">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              Forgot your password?
            </span>
            <span className="text-main text-[14px] font-[500] ml-2 underline">
              Reset password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
