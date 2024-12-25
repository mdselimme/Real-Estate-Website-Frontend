import img1 from "../../../../assets/images/banner-slide-1.jpg";
import img2 from "../../../../assets/images/banner-slide-2.jpg";
import img3 from "../../../../assets/images/banner-slide-3.jpg";
import "./AboutUsBanner.css";

const AboutUsBanner = () => {
  return (
    <div>
      <div className="about-us-banner h-80 w-full bg-no-repeat relative bg-center">
        <div className=" w-full h-full bg-[#0100108e] absolute top-0 left-0 text-white text-center flex justify-center items-center flex-col">
          <h1 className="text-4xl font-extrabold text-white mb-5">About Us</h1>
          <p className="leading-9 text-base font-normal text-white">
            Welcome to Home Lengo! We are dedicated to providing exceptional
            services <br /> and fostering community connections for all
            residents.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-28 py-8">
        <div>
          <ul>
            <li>
              Who We Are: We are a dedicated team of real estate professionals
              committed to helping you buy, sell, or rent properties with
              confidence and ease.
            </li>
            <li>
              Search and Filter Tools: Users can search for properties by
              location, price range, size, type, and other customizable filters
              to find their ideal home or investment.
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src={img1} className="w-full h-72 rounded-xl" alt="about-1" />
          </div>
          <div>
            <img src={img2} className="w-full h-72 rounded-xl" alt="about-2" />
          </div>
          <div className="col-span-2">
            <img src={img3} className="w-full h-72 rounded-xl" alt="about-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
