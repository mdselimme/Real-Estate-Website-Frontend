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
    fetch("http://localhost:2000/homes")
      .then((res) => res.json())
      .then((data) => setResidentSingleData(data));
  }, []);

  // Create an account with email and password
  const registerWithEmailAndPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Logged in account with email and password
  const logInWithEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log in with email and password
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

  // log in with your github account
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

  // log In with twitter or X authentication
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

  // log Out User from website
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

  // Set State for set user data in state
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        setLoading(false);
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
