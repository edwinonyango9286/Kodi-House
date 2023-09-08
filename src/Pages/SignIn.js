import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import {signin} from "../Features/auth/authSlice"
import signupBgImage from '../Assets/images-20230907T172340Z-001/images/Sign up  Loading  1.jpg';
import {AiFillFacebook} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import IconBlue from "../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon blue.png"


let schema =Yup.object().shape({
    email:Yup.
    string()
    .email("Invalid Email")
    .required("Email required"),
    password:Yup
    .string()
    .required("password Required"),

})
 

const SignIn =()=>{
    const 
    dispatch = useDispatch();
    const navigate =useNavigate();
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:schema,
        onSubmit:(values)=>{
            dispatch(signin(values));
        },
    });

    const authState = useSelector((state)=>state);
    const {user,isError,isSuccess,isLoading,message} =authState.auth;
    useEffect(()=>{
        if(isSuccess){
            navigate("admin");
        }else{
            navigate("")
        }
    },[user,isError,isSuccess,isLoading])
    return(
        <>
        <div className="relative w-full h-screen bg-gray-800">
            <img src={signupBgImage} className="absolute object-cover w-full h-full  mix-blend-overlay"/>

        <div className='flex justify-center items-center h-full w-1/2 opacity-90'>
        <form className='max-w-[400px] w-full  bg-white p-8 rounded-md'>
            <div className="flex items-center justify-center ">
                <img  src={IconBlue} className=""></img>

            </div>
            <h2 className='text-lg font-bold text-center py-4'>Create an account</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
    </div>
                    

               


                <div className="w/">

                </div>

            
        </div>
        </>
    )
}
export default SignIn;







 