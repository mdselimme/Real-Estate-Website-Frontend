const Header = () => {
  return (
    <div>
      <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 shadow">
        <div className="navbar-start max-sm:w-1/4">
          <a
            className="link text-base-content/90 link-neutral text-xl font-semibold no-underline"
            href="#"
          >
            FlyonUI
          </a>
        </div>
        <div className="navbar-center max-sm:hidden">
          <ul className="menu menu-horizontal p-0 font-medium">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
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
          <a className="btn max-sm:btn-square btn-primary" href="#">
            <span className="max-sm:hidden">Get started</span>
            <span className="icon-[tabler--arrow-right]"></span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
