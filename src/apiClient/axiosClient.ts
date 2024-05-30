import axios from "axios";
import { getCookie } from "cookies-next";

// Set config defaults when creating the instance
const axiosClient = axios.create({
    baseURL: 'https://api.example.com'
  });
  
  // Alter defaults after instance has been created
  axiosClient.defaults.headers.common['Authorization'] = `Bearer ${getCookie("token")}`;
  export  default axiosClient;
  