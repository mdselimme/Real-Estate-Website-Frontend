import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(0);
  const [residentSingleData, setResidentSingleData] = useState([]);

  // Resident Data Fetch
  useEffect(() => {
    fetch("/resident_data.json")
      .then((res) => res.json())
      .then((data) => setResidentSingleData(data));
  }, []);

  const authDataAll = {
    userData,
    residentSingleData,
  };

  return (
    <AuthContext.Provider value={authDataAll}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
