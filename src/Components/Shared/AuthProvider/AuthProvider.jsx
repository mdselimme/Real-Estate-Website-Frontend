import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import app from "../../FirebaseAuth/FirebaseAuth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [residentSingleData, setResidentSingleData] = useState([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  // Resident Data Fetch
  useEffect(() => {
    fetch("/resident_data.json")
      .then((res) => res.json())
      .then((data) => setResidentSingleData(data));
  }, []);

  const registerWithEmailAndPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = (navigate, location) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        result.user;
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };

  const logInWithGithub = (navigate, location) => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        result.user;
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };

  const logInWithTwitterOrX = (navigate, location) => {
    setLoading(true);
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        result.user;
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };

  const signOutUser = (navigate) => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        setLoading(false);
        console.log(user);
      } else {
        setUserData(null);
        setLoading(false);
      }
      return () => unSubscribed();
    });
  }, [auth]);

  const authDataAll = {
    userData,
    residentSingleData,
    registerWithEmailAndPass,
    auth,
    signOutUser,
    logInWithGoogle,
    logInWithGithub,
    logInWithTwitterOrX,
    logInWithEmailAndPass,
    loading,
  };

  return (
    <AuthContext.Provider value={authDataAll}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
