import useAuth from "../useAuth/useAuth";
import axiosSecure from "../axiosSecure/axiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const { userData } = useAuth();
  const { axiosLinker } = axiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", userData?.email],
    queryFn: async () => {
      const res = await axiosLinker.get(`/users?email=${userData.email}`);
      return res.data;
    },
  });
  return { users, refetch };
};

export default useAllUsers;
