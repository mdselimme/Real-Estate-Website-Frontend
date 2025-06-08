import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useAllHomes = () => {
  const { axiosPublicLinker } = useAxiosPublic();
  const [residents, setResidentSingleData] = useState([]);

  // Resident Data Fetch
  useEffect(() => {
    const callData = async () => {
      try {
        const res = await axiosPublicLinker.get("/homes");
        setResidentSingleData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    callData();
  }, [axiosPublicLinker]);
  return { residents };
};

export default useAllHomes;
