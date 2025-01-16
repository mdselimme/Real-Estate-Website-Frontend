import { Outlet } from "react-router";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
