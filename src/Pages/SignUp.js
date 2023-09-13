import React, { useEffect , useState } from "react";
import CustomInput from "../Components/CustomInput";
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import {signin} from "../Features/auth/authSlice"
import signupBgImage from '../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg';
import {AiFillFacebook} from "react-icons/ai"
import { FaFacebookF } from 'react-icons/fa';
import {FcGoogle} from "react-icons/fc"
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png"
import IconWhite from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon white.png";
import { BsApple } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';


// style
import "../custom-css/layout.css";

// material ui 
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


// 


let schema =Yup.object().shape({
    email:Yup.
    string()
    .email("Invalid Email")
    .required("Email required"),
    password:Yup
    .string()
    .required("password Required"),

})
 

const SignUp =()=>{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); };  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // form alidate
    const isNameValid = /^[A-Za-z\s]+$/.test(name);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create an object with the form data to send to the backend
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
      
    
        // You can now send formData to your backend API
        // Example: axios.post('/api/signup', formData)
      };

    return(
        <>
    <div className="relative w-full h-screen bg-gray-800 flex">
        <img
          src={signupBgImage}
          className="absolute object-cover w-full h-full  mix-blend-overlay"
        />
  
  <div className="flex justify-center items-center h-full w-full md:w-1/3 wider-div opacity-80">

        <form className="max-w-[500px]  w-full bg-white p-8 rounded-md" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
              <img src={IconBlue} alt="Logo" className="" />
            </div>
            <h2 className="text-lg font-bold text-center py-4">Create an account</h2>
            <div className="flex justify-between py-4">
            {/* Google */}
            <FcGoogle
              className="mr-2 icon"
              style={{
                fontSize: '2.5rem', // Increase icon size
                padding: '0.5rem', // Increase padding to create gap
              }}
            />
            {/* Facebook */}
            <FaFacebookF
              className="mr-2 icon"
              style={{
                fontSize: '2.5rem', // Increase icon size
                color: 'blue', // Make it blue
                padding: '0.5rem', // Increase padding to create gap
              }}
            />
            {/* Apple */}
            <BsApple
              className="mr-2 icon"
              style={{
                fontSize: '2.5rem', // Increase icon size
                padding: '0.5rem', // Increase padding to create gap
              }}
            />
            {/* Twitter */}
            <GrTwitter
              className="mr-2 icon"
              style={{
                fontSize: '2.5rem', // Increase icon size
                color: 'blue', // Make it blue
                padding: '0.5rem', // Increase padding to create gap
              }}
            />
          </div>
            <div className="Row">
              <p className="text-center">or, sign up with your email</p>
            </div>
  
            <div>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  endAdornment={
                    <InputAdornment position="start">
                          <svg  viewBox="0 0 940 1000" fill="currentColor"      height="1em"  width="1em"  >
                        <path d="M736 722c136 48 204 88.667 204 122v106H470 0V844c0-33.333 68-74 204-122 62.667-22.667 105.333-45.667 128-69s34-55 34-95c0-14.667-7.333-31-22-49s-25.333-42.333-32-73c-1.333-8-4.333-14-9-18s-9.333-6.667-14-8c-4.667-1.333-9.333-7-14-17s-7.667-24.333-9-43c0-10.667 1.667-19.333 5-26 3.333-6.667 6.333-10.667 9-12l4-4c-5.333-33.333-9.333-62.667-12-88-2.667-36 11-73.333 41-112s82.333-58 157-58 127.333 19.333 158 58 44 76 40 112l-12 88c12 5.333 18 19.333 18 42-1.333 18.667-4.333 33-9 43s-9.333 15.667-14 17c-4.667 1.333-9.333 4-14 8s-7.667 10-9 18c-5.333 32-15.667 56.667-31 74s-23 33.333-23 48c0 40 11.667 71.667 35 95s65.667 46.333 127 69" />
                        </svg>
                    </InputAdornment>
                  }
                  label="Name"
                  helperText="Please enter your name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!isNameValid}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  endAdornment={
                    <InputAdornment position="start">
                        <svg  viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" >
                        <path d="M18.84 7h-2.62L10.5 4 4 7.41V17a2 2 0 01-2-2V7.17c0-.67.28-1.11.81-1.36L10.5 2l7.55 3.81c.45.28.73.69.79 1.19M7 8h13a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2m13 3.67V10l-6.5 3.31L7 10v1.67L13.5 15l6.5-3.33z" />
                        </svg>
                    </InputAdornment>
                  }
                  label="Email"
                  helperText="Please enter your email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  helperText={!isPasswordValid}
                  value={password}
                  required
                  error={!isPasswordValid}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </div>
            <h6 className="flex items-center mt-2">
              <input className="mr-2" type="checkbox" required />I accept the{' '}
              <Link to="">
                <p className="p-terms"> terms and conditions</p>{' '}
              </Link>{' '}
            </h6>
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-blue-500 relative text-white btn-create-account" type="submit">
              Create Account
            </button>
  
            <p className="text-center mt-8">
              Already have an account ? <Link to="/"> Login</Link>
            </p>
          </form>
        </div>
        <div className="hidden md:flex justify-center items-center w-1/2">
        <div className="Col">
                {/* First row */}
            <div className="flex items-center text-white house-icon" >
            <img src={IconWhite} alt="Logo" className="mr-2" />
            <h4 className="text-white">Kodi House</h4>
            </div>

               {/* Second row */}
            <div className="mt-4">
                <h6 className="text-white house-name">Sign up or create account</h6>
            </div>
        </div>

        </div>
      </div>
        </>
    )
}
export default SignUp;







 