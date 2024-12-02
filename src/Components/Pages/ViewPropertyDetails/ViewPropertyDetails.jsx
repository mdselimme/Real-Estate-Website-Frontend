import { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";

const ViewPropertyDetails = () => {
  const { residentSingleData } = useContext(AuthContext);
  const { id } = useParams();
  const data = residentSingleData.find((ele) => ele.id === id);
  console.log(data);
  return (
    <div className="container mx-auto py-10 md:px-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className="w-1/2">
    <img
    className="w-full h-96"
      src={data?.image}
      alt={data?.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data?.title}</h2>
    <p>{data?.description}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ViewPropertyDetails;
