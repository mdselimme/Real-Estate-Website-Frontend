import { Link, useNavigate } from "react-router";
import HeaderLogo from "../../../assets/images/header-logo.png";
import { IoLogIn } from "react-icons/io5";
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { userData, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutUser = () => {
    signOutUser(navigate);
  };

  const routerMenu = [
    {
      id: 101,
      menuItem: "Home",
      path: "/",
    },
    {
      id: 102,
      menuItem: "See All Home",
      path: "/see_all_home",
    },
    {
      id: 103,
      menuItem: "About Us",
      path: "/aboutus",
    },
    {
      id: 104,
      menuItem: "Contact Us",
      path: "/contactus",
    },
  ];

  return (
    <div className="py-4 bg-white shadow">
      <div className="container mx-auto">
        <nav className="navbar flex w-full items-center justify-between gap-2">
          <div className="navbar-start max-sm:w-1/4">
            <Link to={"/"}>
              <img className="w-52" src={HeaderLogo} alt="header-logo" />
            </Link>
          </div>
          <div className="navbar-center max-sm:hidden">
            <ul className="menu menu-horizontal p-0 font-medium">
              {routerMenu.map((event) => (
                <li key={event.id}>
                  <Link className="text-black font-semibold" to={event.path}>
                    {event.menuItem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end items-center gap-4">
            <div className="dropdown relative inline-flex sm:hidden rtl:[--placement:bottom-end]">
              <button
                id="dropdown-default"
                type="button"
                className="dropdown-toggle btn btn-text btn-secondary btn-square"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-default"
              >
                {routerMenu.map((event) => (
                  <li key={event.id}>
                    <Link className="text-black font-semibold" to={event.path}>
                      {event.menuItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {userData && (
              <Link>
                <button className="btn">
                  <FaShoppingCart className="text-2xl text-black" />
                  <div className="badge badge-primary text-white">0</div>
                </button>
              </Link>
            )}

            {userData ? (
              <>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                    <img src={userData?.photoURL} />
                  </div>
                </div>

                <Link
                  onClick={logOutUser}
                  className="text-white hover:text-[#161e2d] hover:bg-white btn btn-outline px-8 font-bold border-2 rounded-full bg-[#1563df] border-[#1563df]"
                >
                  Log Out <FaSignOutAlt />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="text-[#161e2d] btn btn-outline px-6 font-bold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-[#1563df]"
                >
                  Log In <IoLogIn />
                </Link>
                <Link
                  to={"/register"}
                  className="text-white hover:text-[#161e2d] hover:bg-white btn btn-outline px-8 font-bold border-2 rounded-full bg-[#1563df] border-[#1563df]"
                >
                  Register <FaSignInAlt />
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
