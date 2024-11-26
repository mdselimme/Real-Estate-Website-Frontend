import { Link } from "react-router";
import HeaderLogo from "../../../assets/images/header-logo.png";
import { IoLogIn } from "react-icons/io5";

const Header = () => {
  const routerMenu = [
    {
      menuItem: "Home",
      path: "/",
    },
    {
      menuItem: "Contact Us",
      path: "/contactus",
    },
  ];

  return (
    <div className="py-4 bg-white">
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
                <>
                  {" "}
                  <li>
                    <Link className="text-black font-semibold" to={event.path}>
                      {event.menuItem}
                    </Link>
                  </li>
                </>
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
                <li>
                  <a className="dropdown-item" href="#">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
            <Link className="text-[#161e2d] btn btn-outline px-8 font-bold border-2 rounded-full border-[#1563df]">
              Log In <IoLogIn />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
