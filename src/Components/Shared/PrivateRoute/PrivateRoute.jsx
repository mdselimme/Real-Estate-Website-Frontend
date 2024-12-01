import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { userData, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning loading-lg"></span>
      </div>
    );
  }
  if (!userData) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
