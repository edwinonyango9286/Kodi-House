import React from "react";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import { Link } from "react-router-dom";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";
import { HiOutlineMail } from "react-icons/hi";

const EmailVerification = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-cover  bg-gray-800 flex justify-center items-center">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay"
          alt="Backgroundimage"
          loading="lazy"
        />
        <div className="flex justify-center items-center h-full w-full m-4 lg:w-1/2 opacity-95">
          <form className=" w-full md:w-3/4 h-auto flex-shrink-0 bg-white p-4 rounded-md md:p-10">
            <div className="flex items-center justify-center mb-4 flex-col ">
              <img
                src={IconBlue}
                className="flex-shrink-0"
                alt="Icon"
                loading="lazy"
                style={{
                  width: 34,
                  height: 34,
                }}
              />
              <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center mt-4">
                Email Verification
              </h2>
            </div>

            <div className="mt-4 mb-6 md:mb-8">
              <p className="text-default-gray-500 text-sm md:text-base font-medium leading-5 text-center">
                We have sent you verification email example@abc.com, Please
                check it.
              </p>
            </div>

            <div className="flex justify-center items-center border border-gray-500 rounded-full p-4">
              <HiOutlineMail />
            </div>

            <button
              to=""
              className="border rounded-lg w-full py-3 mt-6 md:mt-8 bg-blue-700 relative text-white"
            >
              verify Email
            </button>
          </form>
        </div>

        <div className=" hidden lg:block lg:w-1/2 gap-2">
          <div className="flex flex-col  justify-items-center items-center">
            <div className="text-white">
              <img
                src={LogoWhite}
                alt="Logo"
                className="mr-2"
                loading="lazy"
                style={{ width: 191, height: 53 }}
              />
            </div>

            <div>
              <h6 className="text-white">Sign up or create account</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
