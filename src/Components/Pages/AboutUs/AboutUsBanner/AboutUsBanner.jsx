import "./AboutUsBanner.css";

const AboutUsBanner = () => {
  return (
    <div className="about-us-banner h-80 w-full bg-no-repeat relative bg-center">
      <div className=" w-full h-full bg-[#0100108e] absolute top-0 left-0 text-white text-center flex justify-center items-center flex-col">
        <h1 className="text-4xl font-extrabold text-white mb-5">About Us</h1>
        <p className="leading-9 text-base font-normal text-white">
          Welcome to Home Lengo! We are dedicated to providing exceptional
          services <br /> and fostering community connections for all residents.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
