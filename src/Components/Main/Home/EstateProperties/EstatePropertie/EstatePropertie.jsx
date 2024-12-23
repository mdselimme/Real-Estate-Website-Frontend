import PropTypes from "prop-types";
import { FaBath, FaSquare } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuBedSingle } from "react-icons/lu";
import { Link } from "react-router";

const EstatePropertie = ({ resident }) => {
  return (
    <div className="relative">
      <div className="card bg-base-100 w-[28rem] shadow-xl">
        <figure>
          <img src={resident?.image} alt="Shoes" />
        </figure>
        <div className="p-8">
          <h2 className="text-lg font-semibold">{resident?.title}</h2>

          <div className="my-3">
            <div className="flex justify-between items-center border-b-2 pb-5">
              <p className="flex items-center">
                <span className="text-base mr-2 font-medium text-[#5c6368]">
                  <LuBedSingle className="inline" /> Beds :
                </span>

                {resident?.rooms}
              </p>
              <p className="flex items-center">
                <span className="text-base mr-2 font-medium text-[#5c6368]">
                  <FaBath className="inline" /> Bath :
                </span>

                {resident?.bath}
              </p>
              <p className="flex items-center">
                <span className="text-base mr-2 font-medium text-[#5c6368]">
                  <FaSquare className="inline" /> Sqft :
                </span>

                {resident?.area}
              </p>
            </div>
            <div>
              <div className="pt-4 flex justify-between items-center border-b-2 pb-5">
                <p className="flex items-center text-[#161e2d] font-medium">
                  <IoLocationOutline className="mr-2" /> {resident?.location}
                </p>
                <h3 className="text-[#161e2d] font-bold text-lg">
                  $ {resident?.price}
                </h3>
              </div>
              <div className="flex justify-between items-center pt-5">
                <Link
                  to={`/viewproperty/${resident?._id}`}
                  className="text-white hover:text-[#161e2d] hover:bg-white btn btn-outline px-8 font-bold border-2 rounded-full bg-[#1563df] border-[#1563df]"
                >
                  View Property Details
                </Link>
                <Link className="text-[#161e2d] btn btn-outline px-6 font-bold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-[#1563df]">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center absolute top-5 left-5">
        <p className="text-[#161e2d] text-[12px] outline-1 py-2 bg-white px-5 font-bold border rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-[#1562df3a] mr-5">
          Featured
        </p>
        <p className="text-white text-[12px] hover:text-[#161e2d] hover:bg-white py-2 px-8 font-bold border rounded-full bg-[#1563df] border-[#1563df]">
          {resident?.status}
        </p>
      </div>
    </div>
  );
};

EstatePropertie.propTypes = {
  resident: PropTypes.object.isRequired,
};

export default EstatePropertie;
