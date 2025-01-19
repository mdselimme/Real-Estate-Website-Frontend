import axios from "axios";
import useAuth from "../useAuth/useAuth";

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();

  const axiosLinker = axios.create({
    baseURL: "http://localhost:2000",
  });

  axiosLinker.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptors 401 code error messages
  axiosLinker.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const err = error.response.status;
      console.log("Unfind :", err);
      if (err === 401 || err === 403) {
        signOutUser();
      }
      return Promise.reject(error);
    }
  );

  return { axiosLinker };
};

export default useAxiosSecure;
