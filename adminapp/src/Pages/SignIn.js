import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../Features/auth/authSlice";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";

let schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email required"),
  password: Yup.string().required("password Required"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(signUpUser(values));
    },
  });

  const authState = useSelector((state) => state);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;
  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <>
      <div className="relative z-10 w-full h-full lg:h-auto md:w-screen md:h-screen bg-cover bg-gray-800 flex justify-center items-center overflow-hidden lg:overflow-visible">
        <img
          src={signupBgImage}
          className="absolute w-full h-full  object-cover mix-blend-overlay"
          alt="BackgroundImage"
          loading="lazy"
        />
        <div className="flex justify-center items-center h-full w-full opacity-95 lg:w-1/2 lg:my-4">
          <form className="bg-white px-6 m-4 p-4 md:p-10 md:py-8 w-full  gap-2 h-full md:w-3/4 md:h-auto rounded-md ">
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
            <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center md:mb-4 ">
              Sign in
            </h2>
            <div className="flex flex-col mb-2 md:mb-4 gap-2">
              <label className="font-medium text-sm text-gray-800">Email</label>
              <CustomInput
                type="email"
                placeholder="name@example.com"
                name="email"
                id="email"
                onChng={formik.handleChange("email")}
                onBlr={formik.handleBlur("email")}
                val={formik.values.email}
              />
            </div>
            <div className=" relative z-20 flex flex-col mb-2 gap-2 md:mb-4">
              <label className="font-medium text-sm text-gray-800">
                Password
              </label>
              <CustomInput
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="**********************"
                id="password"
                onChng={formik.handleChange("password")}
                onBlr={formik.handleBlur("password")}
                val={formik.values.password}
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

            <div className="flex items-center justify-between">
              <div className="text-gray-500 text-xs font-medium leading-6">
                <input className="mr-1" type="checkbox" />
                Remember Me
              </div>
              <div>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 text-xs font-medium leading-6 "
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="border rounded-xl w-full py-2 mt-8 bg-blue-700 relative text-white"
            >
              Sign in
            </button>

            <div className="mt-4 flex justify-center items-center ">
              <div className="border-b-2 mr-4 border-gray-400 flex-grow"></div>
              <p className="text-gray-500">OR</p>
              <div className="border-b-2 ml-4 border-gray-400 flex-grow"></div>
            </div>

            <div className="flex flex-col mt-4 space-y-4 gap-2">
              <button className="border rounded-lg w-full  bg-white relative text-gray-800">
                <div className="flex items-center justify-center gap-2 py-3">
                  <FcGoogle />
                  <p className="text-gray-800 text-sm font-bold leading-5 tracking-wide">
                    Sign in via Google
                  </p>
                </div>
              </button>

              <button className="border rounded-lg w-full bg-blue-500 relative text-white">
                <div className="flex items-center justify-center gap-2 py-3">
                  <BsTwitter className="text-white" />
                  <p className="text-sm font-bold leading-5 tracking-wide">
                    Sign in via Twitter
                  </p>
                </div>
              </button>

              <button
                style={{}}
                className="border rounded-lg w-full  bg-black relative text-white"
              >
                <div className="flex items-center justify-center gap-2 py-3">
                  <BsApple className="text-white" />
                  <p className="text-sm font-bold leading-5 tracking-wide">
                    Sign in via Apple
                  </p>
                </div>
              </button>

              <button className="border rounded-lg w-full bg-blue-600 relative text-white">
                <div className="flex items-center justify-center gap-2 py-3">
                  <FaFacebookF className="text-white" />
                  <p className="text-sm font-bold leading-5 tracking-wide">
                    Sign in via Facebook
                  </p>
                </div>
              </button>
            </div>

            <div className="flex items-center flex-row mt-6 mb-2 ">
              <h5 className="text-grya-800 text-sm leading-5 font-medium">
                Doesn't have an account?
              </h5>
              <Link
                to="/signup"
                className="text-blue-600 text-sm leading-5 font-medium ml-2"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>

        <div className=" hidden lg:block  lg:w-1/2">
          <div className="flex flex-col  justify-items-center items-center gap-2">
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
export default SignIn;
