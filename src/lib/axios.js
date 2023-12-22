import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "https://portfolio-backend-v6ux.onrender.com",
});

export default axiosInstace;
