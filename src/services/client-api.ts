import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"06846c8e99074558a886334e25d21781"
}})

