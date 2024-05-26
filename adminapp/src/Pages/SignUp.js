import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../Features/auth/authSlice"
import signupBgImage from '../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg';
import { AiFillFacebook } from "react-icons/ai"
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc"
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png"
import IconWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon white.png";
import { BsApple } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import LogoWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/Logo white.png";




import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';





let schema = Yup.object().shape({
  email: Yup.
    string()
    .email("Invalid Email")
    .required("Email required"),
  password: Yup
    .string()
    .required("password Required"),

})


const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const isNameValid = /^[A-Za-z\s]+$/.test(name);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
    };
    if (!isNameValid) {
      alert('Please enter a valid name (only letters and spaces allowed).');
      return;
    }

    if (!isPasswordValid) {
      alert('Please enter a valid password (at least 8 characters with letters and numbers).');
      return;
    }

    if (!email || !password) {
      alert('Please fill in all required fields.');
      return;
    }


  };

  return (
    <>
      <div className="relative w-full h-screen bg-cover bg-gray-800 flex justify-center items-center">
        <img
          src={signupBgImage}
          className="absolute w-full h-full object-cover mix-blend-overlay"
          alt="BackgroundImage"
        />

        <div className="flex justify-center items-center h-full w-1/2 opacity-95">

          <form className="bg-white p-8 rounded-md w-2/3">
            <div className="flex items-center justify-center ">
              <img src={IconBlue} className="flex-shrink-0" alt="Icon" />
            </div>

            <h2 className="text-3xl text-gray-800 leading-9 font-bold text-center ">
              create an account
            </h2>

            <div className="mt-6 mb-4 flex justify-center items-center" >
              <p className="text-default-gray-500 text-sm md:text-base font-normal leading-5 ">
                Create account with socials
              </p>
            </div>


            <div className="flex  justify-center itesm-center gap-10  py-4">
              <FcGoogle
                className="mr-2 icon border rounded-md  border-blue-500"
                style={{
                  fontSize: '2.5rem',
                  padding: '0.5rem',
                }}
              />
              <FaFacebookF
                className="mr-2 icon border rounded-md border-blue-500"
                style={{
                  fontSize: '2.5rem',
                  color: 'blue',
                  padding: '0.5rem',
                }}
              />
              <BsApple
                className="mr-2 icon border rounded-md border-blue-500"
                style={{
                  fontSize: '2.5rem',
                  padding: '0.5rem',
                }}
              />
              <GrTwitter
                className="mr-2 icon border rounded-md border-blue-500"
                style={{
                  fontSize: '2.5rem',
                  color: 'blue',
                  padding: '0.5rem',
                }}
              />
            </div>
            <div className="mt-6 mb-4 flex justify-center items-center" >
              <p className="text-default-gray-500 text-sm md:text-base font-normal leading-5 ">
                Or sign up with your email
              </p>
            </div>

            <div className="flex flex-col mb-2">
              <CustomInput
                type="text"
                label="Name"
                placeholder="name"
                name="name"
                id="name"
              />
            </div>

            <div className="flex flex-col mb-2">
              <CustomInput
                type="email"
                name="email"
                label="Email"
                placeholder="name@example.com"
                id="pass"
              />
            </div>

            <div className="flex flex-col mb-2">
              <CustomInput
                type="password"
                name="password"
                label="Password"
                placeholder="**********************"
                id="pass"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-gray-500 text-xs font-medium leading-6">
                <input className="mr-1" type="checkbox" />
                I accept the <Link to="" className="text-blue-600" >terms and conditions</Link>
              </div>
            </div>
              <button className="border rounded-lg w-full py-3 mt-4 bg-blue-700 relative text-white">
              Create an account
            </button>

            <div className="flex items-center flex-row mt-4 mb-4">
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
export default SignUp;







