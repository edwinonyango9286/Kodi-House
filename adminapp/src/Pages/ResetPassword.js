import React from "react";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import { Link } from "react-router-dom";
import CustomInput from "../Components/CustomInput";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";

const ResetPassword = ()=>{
    return(
        <>
        <div className="relative w-full h-screen bg-cover  bg-gray-800 flex justify-center items-center">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay"
          alt="Backgroundimage" />

        <div className="flex justify-center items-center h-full w-1/2 opacity-95">
          <form className=" w-2/3 flex-shrink-0 bg-white p-8 rounded-md">
            <div className="flex items-center justify-center ">
              <img src={IconBlue} className="flex-shrink-0"></img>
            </div>
            <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center mb-6">
              Reset password  
            </h2>
            
            <div className="flex flex-col mb-6">
              <CustomInput
                type="password"
                name="password"
                label="Enter new password"
                placeholder="**********************"
                id="pass"
              />
            </div>

            <div className="flex flex-col mb-6">
              <CustomInput
                type="password"
                name="password"
                label="Re-enter password"
                placeholder="**********************"
                id="pass"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-gray-500 text-xs font-medium leading-6">
                <input className="mr-1" type="checkbox" />
                I accept the <Link to="/" className="text-blue-600" >terms and conditions</Link>
              </div>
            </div>

            <button className="border rounded-lg w-full py-3 mt-4 bg-blue-700 relative text-white">
              Reset Password
            </button>   
          </form>
        </div>

        <div className=" hidden sm:block w-1/2">
          <div className="flex flex-col  justify-items-center items-center">
            <div className="text-white" >
              <img src={LogoWhite} alt="Logo" className="mr-2" />
            </div>

            <div className="mt-5">
              <h6 className="text-white">Sign up or create account</h6>
            </div>
          </div>

        </div>
      </div>
        
        </>
    )
}

export default ResetPassword;