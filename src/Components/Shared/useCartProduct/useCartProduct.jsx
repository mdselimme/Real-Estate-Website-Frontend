import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";

const useCartProduct = () => {
  const { userData } = useAuth();
  const { axiosLinker } = axiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", userData?.email],
    queryFn: async () => {
      const res = await axiosLinker.get(`/carts?email=${userData.email}`);
      return res.data;
    },
  });
  return { cart, refetch };
};

export default useCartProduct;
