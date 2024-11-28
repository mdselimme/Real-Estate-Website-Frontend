import { TypeAnimation } from "react-type-animation";
import BannerSlider_1 from "../../../../assets/images/banner-slide-1.jpg";
import BannerSlider_2 from "../../../../assets/images/banner-slide-2.jpg";
import BannerSlider_3 from "../../../../assets/images/banner-slide-3.jpg";
import BannerSlider_4 from "../../../../assets/images/banner-slider-4.jpeg";
import { Link } from "react-router";

const BannerSlider = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="carousel h-[85vh] w-full relative overflow-hidden">
        <div
          id="slide1"
          className="carousel-item relative w-full overflow-hidden"
        >
          <img src={BannerSlider_1} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-40">
            <a href="#slide4" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full overflow-hidden"
        >
          <img src={BannerSlider_2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-40">
            <a href="#slide1" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full overflow-hidden"
        >
          <img src={BannerSlider_3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-40">
            <a href="#slide2" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full overflow-hidden"
        >
          <img src={BannerSlider_4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-40">
            <a href="#slide3" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex text-center items-center justify-center bg-[rgba(0,0,0,0.7)] overflow-hidden">
        <div>
          <h1 className="text-white text-6xl font-extrabold capitalize">
            Find your
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Dream Home", // initially rendered starting point
                1000,
                "Perfect Home",
                500,
              ]}
              speed={10}
              className="capitalize ml-3"
              repeat={Infinity}
            />
          </h1>
          <p className="text-base font-normal text-white leading-[2rem] mt-5">
            We are a real estate agency that will help you find the best
            residence you dream of, <br /> let’s discuss for your dream house?
          </p>
          <div className="mt-8">
            <Link
              to={"/login"}
              className="text-white btn btn-outline text-lg mr-10 px-10 font-semibold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-white"
            >
              For Rent
            </Link>
            <Link
              to={"/register"}
              className="text-white text-lg hover:text-[#161e2d] hover:bg-white btn btn-outline px-10 font-semibold border-2 rounded-full bg-[#1563df] border-[#1563df]"
            >
              For Sale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
