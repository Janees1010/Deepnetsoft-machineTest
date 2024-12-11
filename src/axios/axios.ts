import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deepnetsoft-backend-xdnq.onrender.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
