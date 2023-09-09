import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../Features/auth/authSlice";
import signupBgImage from "../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg";
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";

let schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email required"),
  password: Yup.string().required("password Required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(signin(values));
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
      <div className="relative w-full h-screen bg-cover bg-gray-800 ">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay"
        />

        <div className="flex w-full h-screen">
          <div className="flex justify-center items-center h-full w-1/2 opacity-90">
            <form className="w-3/5 flex-shrink-0 bg-white p-8 rounded-md">
              <div className="flex items-center justify-center ">
                <img src={IconBlue} className="flex-shrink-0"></img>
              </div>
              <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center ">
                Sign in
              </h2>
              <div className="flex flex-col mb-2">
                <CustomInput
                  type="email"
                  label="Email"
                  placeholder="name@example.com"
                  name="email"
                  id="email"
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                  val={formik.values.email}
                />
              </div>
              <div className="flex flex-col">
                <CustomInput
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="**********************"
                  id="pass"
                  onChng={formik.handleChange("password")}
                  onBlr={formik.handleBlur("password")}
                  val={formik.values.password}
                />
              </div>

              <div className="flex gap-64 mt-4">
                <div>
                  <p className=" text-gray-500 text-xs font-medium leading-6">
                    <input className="mr-1" type="checkbox" />
                    Remember Me
                  </p>
                </div>
                <div>
                  <Link
                    to="forgotpassword"
                    className="text-blue-600 text-xs font-medium  leading-6 "
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <button className=" border rounded-md  w-full py-3 mt-4 bg-blue-700 relative text-white">
                Sign in
              </button>

              <div className="mt-4 flex items-center">
                <div className="border-b-2 mr-4 border-gray-400 flex-grow"></div>
                <p className="text-gray-500">OR</p>
                <div className="border-b-2 ml-4 border-gray-400 flex-grow"></div>
              </div>

              <div>
                <button className=" border rounded-md  w-full py-3 mt-4 bg-white relative text-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <FcGoogle />
                    <p className="text-gray-800 text-sm font-bold leading-5 tracking-wide">
                      Sign in via Google
                    </p>
                  </div>
                </button>
                <button className=" border rounded-md  w-full py-3 mt-4 bg-blue-500 relative text-white">
                  <div className="flex items-center justify-center gap-2">
                    <BsTwitter className="text-white" />
                    <p className="text-sm font-bold leading-5 tracking-wide">
                      Sign in via Twitter
                    </p>
                  </div>
                </button>
                <button className=" border rounded-md  w-full py-3 mt-4 bg-black  relative text-white">
                  <div className="flex items-center justify-center gap-2">
                    <BsApple className="text-white" />
                    <p className="text-sm font-bold leading-5 tracking-wide">
                      Sign in via Apple
                    </p>
                  </div>
                </button>

                <button className=" border rounded-md  w-full py-3 mt-4 bg-blue-600 relative text-white">
                  <div className="flex items-center justify-center gap-2">
                    <FaFacebookF className="text-white" />
                    <p className="text-sm font-bold leading-5 tracking-wide">
                      Sign in via Facebook
                    </p>
                  </div>
                </button>
              </div>

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
    </>
  );
};
export default SignIn;
