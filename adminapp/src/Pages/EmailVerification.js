import React from "react";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import { Link } from "react-router-dom";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.svg";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.svg";
import { HiOutlineMail } from "react-icons/hi";

const EmailVerification = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-cover  bg-gray-800 flex justify-center items-center bg-opacity-70">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay"
          alt="Backgroundimage"
          loading="lazy"
        />
        <div className="flex justify-center items-center h-full w-full m-4 lg:w-1/2 opacity-95">
          <form className=" flex justify-center items-center flex-col w-full md:w-3/4 h-auto flex-shrink-0 bg-white p-4 rounded-md md:p-10 gap-4">
            <div className="flex items-center justify-center flex-col ">
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
              <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center">
                Email Verification
              </h2>
            </div>

            <div>
              <p className="text-default-gray-500 text-xs md:text-base font-medium leading-5 text-center">
                We have sent you verification email example@abc.com, Please
                check it.
              </p>
            </div>

            <div className="flex justify-center items-center rounded-full p-4 w-16 h-16 bg-gray-200 flex-shrink">
              <HiOutlineMail
                style={{
                  width: 53,
                  height: 53,
                }}
                className="text-gray-500"
              />
            </div>

            <button
              type="submit"
              className="border rounded-xl w-full py-2  bg-blue-700 hover:bg-blue-600 relative text-white"
            >
              verify Email
            </button>

            <div>
              <p className="text-xs text-default-gray-500 md:text-base font-medium mb-4 ">
                Didn't recieve an email?{" "}
                <span className="text-blue-600">Resend</span>
              </p>
            </div>
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
