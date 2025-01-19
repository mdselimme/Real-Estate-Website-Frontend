import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Main/Root/Root.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Main/Home/Home.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx";
import LogIn from "./Components/Main/Authentication/LogIn/LogIn.jsx";
import Register from "./Components/Main/Authentication/Register/Register.jsx";
import AboutUs from "./Components/Pages/AboutUs/AboutUs.jsx";
import AuthProvider from "./Components/Shared/AuthProvider/AuthProvider.jsx";
import UpdateProfile from "./Components/Pages/UpdateProfile/UpdateProfile.jsx";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute.jsx";
import ViewPropertyDetails from "./Components/Pages/ViewPropertyDetails/ViewPropertyDetails.jsx";
import NotFound from "./Components/Pages/NotFound/NotFound.jsx";
import SeeAllHome from "./Components/Pages/SeeAllHome/SeeAllHome.jsx";
import Dashboard from "./Components/Pages/Dashboard/Dashboard.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShowCartProduct from "./Components/Pages/ShowCartProduct/ShowCartProduct.jsx";
import DashBoardHome from "./Components/Pages/Dashboard/DashBoardHome/DashBoardHome.jsx";
import AllUserDashboard from "./Components/Pages/Dashboard/AllUserDashboard/AllUserDashboard.jsx";
import ManageAdminUsers from "./Components/Pages/Dashboard/ManageAdminUsers/ManageAdminUsers.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root></Root>}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/login" element={<LogIn></LogIn>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
              <Route
                path="/contactus"
                element={<ContactUs></ContactUs>}
              ></Route>
              <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard></Dashboard>
                  </PrivateRoute>
                }
              >
                <Route
                  path="/dashboard"
                  element={<DashBoardHome></DashBoardHome>}
                ></Route>
                <Route
                  path="/dashboard/home"
                  element={<DashBoardHome></DashBoardHome>}
                ></Route>
                <Route
                  path="/dashboard/show_cart_product"
                  element={<ShowCartProduct></ShowCartProduct>}
                ></Route>
                <Route
                  path="/dashboard/show_all_users"
                  element={<AllUserDashboard></AllUserDashboard>}
                ></Route>
                <Route
                  path="/dashboard/manage_admin_users"
                  element={<ManageAdminUsers></ManageAdminUsers>}
                ></Route>
              </Route>

              <Route
                path="/see_all_home"
                element={<SeeAllHome></SeeAllHome>}
              ></Route>

              <Route
                path="/updateprofile"
                element={
                  <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/viewproperty/:id"
                element={
                  <PrivateRoute>
                    <ViewPropertyDetails></ViewPropertyDetails>
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
