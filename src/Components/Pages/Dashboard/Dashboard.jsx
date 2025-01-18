import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-start">
        <div className="h-screen">
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="mb-4">
              <NavLink to={"/dashboard/home"}>Dashboard Home</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to={"/dashboard/show_cart_product"}>My Cart</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to={"/dashboard/show_all_users"}>All Users</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to={"/dashboard/show_all_orders"}>All Orders</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to={"/dashboard/show_all_reviews"}>Reviews</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to={"/dashboard/manage_users"}>Manage Users</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
