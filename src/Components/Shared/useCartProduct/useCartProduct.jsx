import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../axiosSecure/axiosSecure";

const useCartProduct = () => {
  const { axiosLinker } = axiosSecure();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosLinker.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCartProduct;
