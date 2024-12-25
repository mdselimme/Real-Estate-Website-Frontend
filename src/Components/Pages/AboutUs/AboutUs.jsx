import { Helmet } from "react-helmet";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Home Lengo</title>
      </Helmet>
      <AboutUsBanner></AboutUsBanner>
    </div>
  );
};

export default AboutUs;
