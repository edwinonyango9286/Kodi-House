import { newRequest } from "../../Utils/newRequest";

const registerLandlord = async (userData) => {
  const response = await newRequest.post("auth/register-landlord", userData);
  if (response?.data) {
    return response.data;
  }
};

const authService = {
  registerLandlord,
};
export default authService;
