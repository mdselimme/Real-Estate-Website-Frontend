import Swal from "sweetalert2";
import axiosSecure from "../../Shared/useAxiosSecure/useAxiosSecure";
import useCartProduct from "../../Shared/useCartProduct/useCartProduct";

const ShowCartProduct = () => {
  const { cart } = useCartProduct();
  const { axiosLinker } = axiosSecure();
  const { refetch } = useCartProduct();

  const deleteCartProduct = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${title}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosLinker
          .delete(`carts/product/${id}`)
          .then((result) => {
            if (result.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error.message, error.code);
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-emerald-200 p-5 text-center">
        <h1 className="text-2xl font-extrabold text-black">
          Total Cart Product : {cart.length}
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-black font-bold capitalize text-lg text-center">
                  No.
                </th>
                <th className="text-black font-bold capitalize text-lg text-center">
                  Image
                </th>
                <th className="text-black font-bold capitalize text-lg text-center">
                  Product Title
                </th>
                <th className="text-black font-bold capitalize text-lg text-center">
                  Status
                </th>
                <th className="text-black font-bold capitalize text-lg text-center">
                  Price $
                </th>
                <th className="text-black font-bold capitalize text-lg text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((product, index) => (
                <tr key={index + 3} className="text-center">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-24 mx-auto rounded-md"
                      src={product?.image}
                      alt=""
                    />
                  </td>
                  <td>{product?.title}</td>
                  <td>{product?.status ? product?.status : "No status"}</td>
                  <td>{product?.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        deleteCartProduct(product?._id, product?.title)
                      }
                      className="bg-primary px-3 py-2 font-semibold text-white rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowCartProduct;
