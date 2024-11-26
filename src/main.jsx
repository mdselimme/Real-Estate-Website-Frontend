import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Main/Root/Root.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Main/Home/Home.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
