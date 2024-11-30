import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../FirebaseAuth/FirebaseAuth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(0);
  const [residentSingleData, setResidentSingleData] = useState([]);

  const auth = getAuth(app);

  // Resident Data Fetch
  useEffect(() => {
    fetch("/resident_data.json")
      .then((res) => res.json())
      .then((data) => setResidentSingleData(data));
  }, []);

  const registerWithEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        console.log(user);
      }
      return () => unSubscribed();
    });
  }, [auth]);

  const authDataAll = {
    userData,
    residentSingleData,
    registerWithEmailAndPass,
    auth,
  };

  return (
    <AuthContext.Provider value={authDataAll}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
