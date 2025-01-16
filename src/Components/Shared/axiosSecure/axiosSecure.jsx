import axios from "axios";

const axiosSecure = () => {
  const axiosLinker = axios.create({
    baseURL: "http://localhost:2000",
  });
  return { axiosLinker };
};

export default axiosSecure;
