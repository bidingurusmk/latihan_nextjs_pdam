import { BASE_API_URL } from "@/global";
import { getServerCookie } from "@/lib/server-cookie";
import { Data } from "@/types/getMe";
import axios from "axios";
type ResponseData = {
    status: boolean
    message: string
    data?: Data
}

const GetMeApi = async (): Promise<ResponseData> => {
    try{
        const token = await getServerCookie("token");
        console.log(token);
        const reponse = await axios.get(`${BASE_API_URL}/admins/me`, {
            headers: {
                "Content-Type": "application/json",
                'app-key': 'da90760feb89bf96e5ac0f1029fc370c9f4597ba',  
                'authorization': `Bearer ${token}`
            },
        });
        const data = reponse.data;
        return {
            status: true,
            message: "User data fetched successfully",
            data: data.data
        };
    } catch(error){
        return {
            status: false,
            message: "Failed to fetch user data",
        };
    }
}
export default GetMeApi;