import BannerSlider from "./BannerSlider/BannerSlider";
import EstateProperties from "./EstateProperties/EstateProperties";
import HowWorks from "./HowWorks/HowWorks";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <HowWorks></HowWorks>
      <EstateProperties></EstateProperties>
    </div>
  );
};

export default Home;
