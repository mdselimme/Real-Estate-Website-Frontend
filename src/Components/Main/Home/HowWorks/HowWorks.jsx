import { FaClipboardList, FaMapMarked, FaUserFriends } from "react-icons/fa";
import RightArrow1 from "../../../../assets/images/arrow-right-1.png";
import RightArrow2 from "../../../../assets/images/arrow-right-2.png";

const HowWorks = () => {
  return (
    <div className="pt-14 pb-5">
      <div className="container mx-auto">
        <div className="text-center py-10">
          <h1 className="text-5xl font-bold mb-5">How It Works</h1>
          <p className="text-base leading-9 font-medium text-[rgba(78,92,125)]">
            This is a company that provides services by facilitating property
            transactions, offering <br /> market analysis, managing rentals, and
            providing investment guidance.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-center justify-between mb-16 mt-8">
            <div className="w-1/4 border border-[#1563DF] rounded-tr-[4.357rem] rounded-bl-[4.357rem] p-10 relative">
              <FaMapMarked className="text-[#2566E3] text-6xl mb-6" />
              <h3 className="text-[#2D3954] text-xl font-extrabold mb-5">
                Evaluate Property
              </h3>
              <p className="text-base leading-8 font-medium text-[rgba(78,92,125)]">
                Evaluate property value, condition, potential, and market demand
                to make informed real estate decisions.
              </p>
              <h4
                className="absolute right-0 top-0 text-[#2566E3] text-2xl font-extrabold w-[90px] h-[90px] leading-[90px] text-center bg-[#eef4fd]"
                style={{ borderRadius: "0 70px" }}
              >
                1
              </h4>
            </div>
            <div className="w-1/4 border border-[#1563DF] rounded-tr-[4.357rem] rounded-bl-[4.357rem] p-10 relative">
              <FaUserFriends className="text-[#2566E3] text-6xl mb-6" />
              <h3 className="text-[#2D3954] text-xl font-extrabold mb-5">
                Meet your Agent
              </h3>
              <p className="text-base leading-8 font-medium text-[rgba(78,92,125)]">
                Evaluate property value, condition, potential, and market demand
                to make informed real estate decisions.
              </p>
              <h4
                className="absolute right-0 top-0 text-[#2566E3] text-2xl font-extrabold w-[90px] h-[90px] leading-[90px] text-center bg-[#eef4fd]"
                style={{ borderRadius: "0 70px" }}
              >
                2
              </h4>
            </div>
            <div className="w-1/4 border border-[#1563DF] rounded-tr-[4.357rem] rounded-bl-[4.357rem] p-10 relative">
              <FaClipboardList className="text-[#2566E3] text-6xl mb-6" />
              <h3 className="text-[#2D3954] text-xl font-extrabold mb-5">
                Close the Deal
              </h3>
              <p className="text-base leading-8 font-medium text-[rgba(78,92,125)]">
                Evaluate property value, condition, potential, and market demand
                to make informed real estate decisions.
              </p>
              <h4
                className="absolute right-0 top-0 text-[#2566E3] text-2xl font-extrabold w-[90px] h-[90px] leading-[90px] text-center bg-[#eef4fd]"
                style={{ borderRadius: "0 70px" }}
              >
                3
              </h4>
            </div>
          </div>
          <div className="absolute top-1/2 left-[27.5%]">
            <img src={RightArrow2} className="w-28" alt="rightarrow-1" />
          </div>
          <div className="absolute top-1/2 right-[27.5%]">
            <img src={RightArrow1} className="w-28" alt="rightarrow-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
