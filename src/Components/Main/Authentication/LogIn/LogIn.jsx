import { useContext } from "react";
import { AuthContext } from "../../../Shared/AuthProvider/AuthProvider";

const LogIn = () => {
  const { userData } = useContext(AuthContext);

  console.log(userData);

  return (
    <div>
      <h1>Log In</h1>
    </div>
  );
};

export default LogIn;
