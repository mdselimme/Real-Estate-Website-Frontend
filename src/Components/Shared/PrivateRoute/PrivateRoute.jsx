import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { userData, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  if (!userData) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
