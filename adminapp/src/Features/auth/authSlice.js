import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

export const registerPropertyLandlord = createAsyncThunk(
  "auth/user-register",
  async (userData, thunkAPI) => {
    try {
      return await authService.registerLandlord(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  landlord: "",
  isError: false,
  isLoading: {
    registerPropertyLandlord: false,
  },
  isSuccess: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerPropertyLandlord.pending, (state) => {
        state.isLoading.registerPropertyLandlord = true;
      })
      .addCase(registerPropertyLandlord.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading.registerPropertyLandlord = false;
        state.isSuccess = false;
        state.createdLandlord = action?.payload;
        state.message = action?.payload?.response?.data?.message;
      })
      .addCase(registerPropertyLandlord.rejected, (state, action) => {
        state.isError = true;
        state.isLoading.registerPropertyLandlord = false;
        state.isSuccess = false;
        state.message = action?.payload?.response?.data?.message;
      });
  },
});

export default authSlice.reducer;
