import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png";
import { BsApple } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
  password: Yup.string().required("Please enter your password."),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {},
  });

  return (
    <>
      <div className="relative z-10 w-full h-full lg:h-auto md:w-screen  md:h-screen bg-cover bg-gray-800 flex justify-center items-center overflow-hidden">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay "
          alt="BackgroundImage"
          loading="lazy"
        />
        <div className="flex justify-center items-center w-full opacity-95 lg:w-1/2 lg:my-4">
          <form
            className="bg-white p-4 m-4 md:p-8 rounded-md w-full h-full md:py-8 md:w-3/4 md:h-auto"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex items-center justify-center mb-2">
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
            </div>

            <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center ">
              create an account
            </h2>

            <div className="mt-4 mb-4 flex justify-center items-center">
              <p className="text-default-gray-500 text-sm md:text-base font-normal leading-5 ">
                Create account with socials
              </p>
            </div>

            <div className="flex  justify-center itesm-center gap-10  py-4">
              <FcGoogle
                className="mr-2 icon border rounded-md  border-blue-500"
                style={{
                  fontSize: "2.5rem",
                  padding: "0.5rem",
                }}
              />
              <FaFacebookF
                className="mr-2 icon border rounded-md border-blue-500"
                style={{
                  fontSize: "2.5rem",
                  color: "blue",
                  padding: "0.5rem",
                }}
              />
              <BsApple
                className="mr-2 icon border rounded-md border-black"
                style={{
                  fontSize: "2.5rem",
                  padding: "0.5rem",
                }}
              />
              <GrTwitter
                className="mr-2 icon border rounded-md border-blue-500"
                style={{
                  fontSize: "2.5rem",
                  color: "blue",
                  padding: "0.5rem",
                }}
              />
            </div>
            <div className="mt-4 mb-4 flex justify-center items-center">
              <div className="border-b-2 mr-4 border-gray-400 flex-grow"></div>
              <p className="text-default-gray-500 text-sm md:text-base font-normal leading-5 ">
                Or sign up with your email
              </p>
              <div className="border-b-2 ml-4 border-gray-400 flex-grow"></div>
            </div>

            <div className="flex flex-col mb-2 md:mb-4 gap-2">
              <label className="font-medium text-sm text-gray-800">Name</label>
              <CustomInput
                type="text"
                placeholder="name"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col mb-2 md:mb-4 gap-2">
              <label className="font-medium text-sm text-gray-800">Email</label>
              <CustomInput
                type="email"
                name="email"
                placeholder="name@example.com"
                id="pass"
              />
            </div>
            <div className=" relative z-20 flex flex-col mb-2 md:mb-4 gap-2">
              <label className="font-medium text-sm text-gray-800">
                Password
              </label>

              <CustomInput
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="**********************"
                id="password"
              />
              <div>
                <button
                  type="button"
                  onClick={handleToggle}
                  className="absolute right-0 flex items-center p-3 mt-[-46px] "
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-gray-500"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-gray-500 text-xs font-medium leading-6">
                <input className="mr-1" type="checkbox" />I accept the{" "}
                <Link to="" className="text-blue-600">
                  terms and conditions
                </Link>
              </div>
            </div>
            <button className="border rounded-xl w-full py-2 mt-8 bg-blue-700 relative text-white">
              Create an account
            </button>

            <div className="flex items-center flex-row mt-6 mb-2">
              <h5 className="text-grya-800 text-sm leading-5 font-medium">
                Already have an accout ?
              </h5>
              <Link
                to="/"
                className="text-blue-600 text-sm leading-5 font-medium ml-2"
              >
                Login here
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2 overflow-hidden gap-2">
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
            <div className="">
              <h6 className="text-white">Sign up or create account</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
