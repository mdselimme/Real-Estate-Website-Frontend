import { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";

const ViewPropertyDetails = () => {
  const { residentSingleData } = useContext(AuthContext);
  const { id } = useParams();
  const data = residentSingleData.find((ele) => ele.id === id);
  console.log(data);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ViewPropertyDetails;
