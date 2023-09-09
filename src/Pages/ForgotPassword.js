import React from "react";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import { Link } from "react-router-dom";
import CustomInput from "../Components/CustomInput";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";

const ForgotPassword = () => {
  return (
    <>
      <div className="realtive w-full h-screen  bg-gray-800">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay"
        />
        <div className="flex w-full h-full">
          <div className="flex w-full h-screen">
            <div className="flex justify-center items-center h-full w-1/2 opacity-90">
              <form className="w-3/5 flex-shrink-0 bg-white p-8 rounded-md">
                <div className="flex items-center justify-center ">
                  <img src={IconBlue} className="flex-shrink-0"></img>
                </div>
                <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center ">
                  Forgot your password
                </h2>
                <div>
                  <p className="">
                    Don't fret! Just type your email and we will send you a code
                    to reset your password
                  </p>
                </div>

                <div className="flex flex-col mb-2">
                  <CustomInput
                    type="email"
                    label="Email"
                    placeholder="name@example.com"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="flex gap-64 mt-4">
                  <div>
                    <p className=" flex  text-gray-500 text-xs font-medium leading-6">
                      <input className="mr-1" type="checkbox" />
                      <h6 className="mr-2">I accept the </h6>{" "}
                      <h6 className="text-blue-700"> terms and conditions</h6>
                    </p>
                  </div>
                  <div></div>
                </div>

                <button className=" border rounded-md  w-full py-3 mt-4 bg-blue-700 relative text-white">
                  Recover Password
                </button>

                <div className="flex items-center flex-row mt-3 mb-4">
                  <h5 className="text-grya-800 text-sm leading-5 font-medium">
                    Doesn't have account?
                  </h5>
                  <Link
                    to=""
                    className="text-blue-600 text-sm leading-5 font-medium "
                  >
                    Create an account
                  </Link>
                </div>
              </form>
            </div>

            <div className="flex justify-center items-center h-full w-1/2 opacity-90">
              <div className="inline-flex p-1 flex-col justify-center items-center gap-4">
                <img src={LogoWhite} className="w-[192px] h-[53px]"></img>
                <h6 className="text-white text-center text-base font-normal">
                  sign up or create an account
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
