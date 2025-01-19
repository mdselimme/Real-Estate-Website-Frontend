import useAuth from "../useAuth/useAuth";
import axiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const { userData } = useAuth();
  const { axiosLinker } = axiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", userData?.email],
    queryFn: async () => {
      const res = await axiosLinker.get(
        `/users?email=${userData.email}` /* {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      } */
      );
      return res.data;
    },
  });
  return { users, refetch };
};

export default useAllUsers;
