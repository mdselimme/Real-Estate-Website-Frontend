import Swal from "sweetalert2";
import useAuth from "../useAuth/useAuth";
import { useNavigate } from "react-router";
import axiosSecure from "../axiosSecure/axiosSecure";
import useCartProduct from "../useCartProduct/useCartProduct";

const useAddToCartFunc = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const { axiosLinker } = axiosSecure();
  const { refetch } = useCartProduct();

  const addToCartProduct = (home) => {
    // console.log(home, userData.email);
    if (userData && userData.email) {
      //add to cart
      const cartItem = {
        residentId: home._id,
        title: home?.title,
        email: userData.email,
        image: home?.image,
        price: home?.price,
        status: home?.status,
      };
      axiosLinker.post("/carts", cartItem).then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: `Add To Product Cart Successfully`,
            icon: "success",
            draggable: true,
          });
          // refetch data for update the cart number
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In.",
        text: "Please log in first to add to cart Product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Log in page",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page
          // navigate("/login", { state: { from: location } });
          navigate("/login");
        }
      });
    }
  };
  return { addToCartProduct };
};

export default useAddToCartFunc;
