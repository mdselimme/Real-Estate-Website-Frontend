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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root></Root>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<LogIn></LogIn>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="/updateprofile"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
