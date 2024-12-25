import { Helmet } from "react-helmet";
import BannerSlider from "./BannerSlider/BannerSlider";
import EstateProperties from "./EstateProperties/EstateProperties";
import HowWorks from "./HowWorks/HowWorks";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page - Home Lengo</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <HowWorks></HowWorks>
      <EstateProperties></EstateProperties>
    </div>
  );
};

export default Home;
