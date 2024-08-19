import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

export const signUpUser = createAsyncThunk(
  "auth/user-register",
  async (userData, thunkAPI) => {
    try {
      return await authService.createAccount(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = false;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
        }
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
        }
      });
    
  },
});

export default authSlice.reducer;
