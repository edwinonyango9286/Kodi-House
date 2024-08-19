import axios from "axios";
import { base_url } from "../../Utils/BaseUrl";

const createAccount = async (userData) => {
  const response = await axios.post(`${base_url}/auth/createaccount`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  createAccount,
};
export default authService;
