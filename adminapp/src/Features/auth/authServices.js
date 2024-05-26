import axios from "axios";
import {base_url} from "../../Utils/BaseUrl";

const signup = async(userData)=>{
    const response = await axios.post(`${base_url}/v1/kodi/auth/login`,userData)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data
}

const authService = {
    signup
}

export default authService;