import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useAllHomes = () => {
  const { axiosPublicLinker } = useAxiosPublic();
  const [residents, setResidentSingleData] = useState([]);

  // Resident Data Fetch
  useEffect(() => {
    axiosPublicLinker
      .get("/homes")
      .then((res) => {
        setResidentSingleData(res.data);
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  }, [axiosPublicLinker]);
  return { residents };
};

export default useAllHomes;
