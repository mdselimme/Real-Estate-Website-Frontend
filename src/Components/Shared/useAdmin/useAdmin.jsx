import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
  const { userData } = useAuth();
  const { axiosLinker } = useAxiosSecure();
  const { data: admin } = useQuery({
    queryKey: [userData?.email, "masterAdmin"],
    queryFn: async () => {
      const res = await axiosLinker.get(`/admin/find/${userData?.email}`);
      return res?.data;
    },
  });
  return { admin };
};

export default useAdmin;
