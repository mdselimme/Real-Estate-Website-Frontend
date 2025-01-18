import useCartProduct from "../../Shared/useCartProduct/useCartProduct";

const ShowCartProduct = () => {
  const { cart } = useCartProduct();

  return (
    <div>
      <div className="bg-emerald-400 p-5 rounded-xl">
        <h1 className="text-2xl font-extrabold text-white">
          Total Cart Product : {cart.length}
        </h1>
      </div>
    </div>
  );
};

export default ShowCartProduct;
