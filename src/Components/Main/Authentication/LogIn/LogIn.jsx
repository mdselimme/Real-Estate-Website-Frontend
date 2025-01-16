import { FaGithubSquare, FaGoogle, FaSignInAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import useAuth from "../../../Shared/useAuth/useAuth";
import axiosSecure from "../../../Shared/axiosSecure/axiosSecure";
import Swal from "sweetalert2";

const LogIn = () => {
  const {
    logInWithEmailAndPass,
    logInWithGithub,
    logInWithTwitterOrX,
    logInWithGoogle,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const { axiosLinker } = axiosSecure();

  const handleLogInAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmailAndPass(email, password)
      .then((result) => {
        result.user;
        axiosLinker
          .post(`/email?email=${email}`, { withCredentials: true })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
        const usersData = {
          email: result.user.email,
          lastLoggedInTime: result.user.metadata.lastSignInTime,
        };
        axiosLinker
          .patch("/users", usersData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
        if (result.user) {
          Swal.fire({
            title: `Successfully Logged In your Account`,
            icon: "success",
            draggable: true,
          });
        }
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
    e.target.reset();
  };

  const handleLogInWithGoogle = () => {
    logInWithGoogle(navigate);
  };
  const handleLogInWithGithub = () => {
    logInWithGithub(navigate);
  };
  const handleLogInWithTwitter = () => {
    logInWithTwitterOrX(navigate);
  };

  return (
    <div>
      <Helmet>
        <title>Log In - Home Lengo</title>
      </Helmet>
      <div className="container mx-auto py-10">
        <h1 className="text-center my-5 font-extrabold text-2xl">
          Log In Your Account
        </h1>
        <div className="w-2/5 mx-auto">
          <form onSubmit={handleLogInAccount}>
            <div className="mb-5">
              <label className="input input-bordered rounded-full flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter your e-mail Address"
                  name="email"
                />
              </label>
            </div>
            <div className="mb-5">
              <label className="input input-bordered rounded-full flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter your Password"
                  name="password"
                />
              </label>
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="text-white hover:text-[#161e2d] hover:bg-white btn btn-outline w-full px-8 font-bold border-2 rounded-full bg-[#1563df] border-[#1563df]"
              >
                Log In <FaSignInAlt />
              </button>
            </div>
          </form>
          <p className="text-center">If You Have No Account ?</p>
          <p className="text-center">
            Go to
            <Link to={"/register"} className="underline ml-1 text-blue-700">
              Register
            </Link>
          </p>
          <div className="divider">Or</div>
          <div className="text-center">
            <div className="flex justify-between items-center mb-5">
              <button
                onClick={handleLogInWithGoogle}
                className="text-[#161e2d] btn w-[47%] btn-outline px-8 font-bold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-black"
              >
                <FaGoogle className="text-lg" />
                Sign In With Google
              </button>
              <button
                onClick={handleLogInWithGithub}
                className="text-[#161e2d] btn w-[47%] btn-outline px-8 font-bold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-black"
              >
                <FaGithubSquare className="text-lg" /> Sign In With Github
              </button>
            </div>
            <button
              onClick={handleLogInWithTwitter}
              className="text-[#161e2d] w-full btn btn-outline px-8 font-bold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-black"
            >
              <FaXTwitter className="text-lg" /> Sign In With X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
