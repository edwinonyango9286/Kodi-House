import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserFromLocalStorage = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):null;

const  initialState ={
    user:getUserFromLocalStorage,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const signin = createAsyncThunk(
    "auth/signin",
    async(user,thunkAPI)=>{
        try {
            return await authService.signin(user)
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
            
        }
    }
)

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signin.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(signin.fulfilled,(state,action)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=true;
            state.user= action.payload;
            state.message="success";
        })
        .addCase(signin.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})


export default authSlice.reducer
