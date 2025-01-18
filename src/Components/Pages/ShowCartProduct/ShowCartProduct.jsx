import useCartProduct from "../../Shared/useCartProduct/useCartProduct";

const ShowCartProduct = () => {
  const { cart } = useCartProduct();

  return (
    <div>
      <div className="bg-emerald-200 p-5 text-center">
        <h1 className="text-2xl font-extrabold text-black">
          Total Cart Product : {cart.length}
        </h1>
      </div>
    </div>
  );
};

export default ShowCartProduct;
