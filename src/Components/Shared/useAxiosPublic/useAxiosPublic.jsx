import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublicLinker = axios.create({
    baseURL: "http://localhost:2000",
  });
  return { axiosPublicLinker };
};

export default useAxiosPublic;
