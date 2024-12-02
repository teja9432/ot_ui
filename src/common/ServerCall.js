import axios from "axios";
const BASE_URL="http://localhost:3030/";
class ServerCall {
    static fnSendGetreq(url){
        return axios.get(BASE_URL+url,
            {
                headers:{
                    Authorization:sessionStorage.token
                }
        });
    }
    static fnSendPostreq(url,data){
        return axios.post(BASE_URL+url,data);
    }
}

export default ServerCall