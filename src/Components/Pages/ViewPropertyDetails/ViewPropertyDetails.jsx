import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { IoLocationOutline } from "react-icons/io5";
import { FaBath, FaSquare } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import axiosSecure from "../../Shared/axiosSecure/axiosSecure";

const ViewPropertyDetails = () => {
  const [data, setPropertyData] = useState(null);
  const { id } = useParams();
  const axiosLinker = axiosSecure();

  useEffect(() => {
    axiosLinker
      .get(`/homes/${id}`)
      .then((res) => {
        setPropertyData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //fetch method to find data
    /* fetch(`http://localhost:2000/homes/${id}`)
      .then((res) => res.json())
      .then((data) => setPropertyData(data)); */
  }, [axiosLinker, id]);

  return (
    <div className="container mx-auto py-10 md:px-5">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img
            className="w-full h-[25rem] rounded-2xl"
            src={data?.image}
            alt={data?.title}
          />
          <button className="text-[#161e2d] px-14 mt-5 py-4 font-bold border-2 rounded-full hover:text-white hover:bg-[#1563df] hover:border-[#1563df] border-[#1563df]">
            Add to Cart
          </button>
        </div>
        <div className="bg-[#F3F7FD] p-10 rounded-2xl">
          <div className="bg-white rounded-2xl p-10">
            <p className="text-[#1563df] text-base inline-block hover:text-[#161e2d] py-2 px-6 font-bold rounded-full bg-[#FEECE5] mb-4">
              {data?.segment}
            </p>
            <h1 className="text-2xl font-extrabold">{data?.title}</h1>
            <p className="flex items-center text-[#161e2d] mt-5 font-normal">
              <IoLocationOutline className="mr-2" /> {data?.location}
            </p>
            <div className="flex justify-between items-center mt-5">
              <p className="flex items-center">
                <span className="text-base mr-2 font-normal text-[#5c6368]">
                  <LuBedSingle className="inline" /> Beds :
                </span>

                {data?.rooms}
              </p>
              <p className="flex items-center">
                <span className="text-base mr-2 font-normal text-[#5c6368]">
                  <FaBath className="inline" /> Bath :
                </span>

                {data?.bath}
              </p>
              <p className="flex items-center">
                <span className="text-base mr-2 font-normal text-[#5c6368]">
                  <FaSquare className="inline" /> Sqft :
                </span>

                {data?.area}
              </p>
            </div>
          </div>

          <div className="bg-white mt-10 p-10 rounded-2xl">
            <h1 className="text-xl font-extrabold">Details and Features</h1>
            <table className="mt-3">
              <tbody>
                <tr>
                  <td className="p-4">
                    <b>Price:</b>
                  </td>
                  <td className="p-4">{data?.price} $</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <b>Status:</b>
                  </td>
                  <td className="p-4">{data?.status}</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <b>Rooms:</b>
                  </td>
                  <td className="p-4">{data?.rooms}</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <b>Bath:</b>
                  </td>
                  <td className="p-4">{data?.bath}</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <b>Area:</b>
                  </td>
                  <td className="p-4">{data?.area}</td>
                </tr>
              </tbody>
            </table>
            <h1 className="text-lg font-extrabold mt-5">Others Facilities</h1>
            <div>
              <ul className="flex justify-start text-white mt-5 gap-5 flex-wrap">
                {data?.facilities.map((ele, idn) => (
                  <li
                    className="text-base bg-[#2567e3d0] px-5 rounded-lg py-2 font-medium"
                    key={idn}
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="tooltip w-full tooltip-black"
            data-tip="Click for show Details"
          >
            <div className="bg-white mt-10 p-10 rounded-2xl text-start">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="text-xl font-extrabold">
                      Description
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="text-base mt-5 leading-8 font-medium text-justify text-[rgba(78,92,125)]">
                    {data?.description}
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPropertyDetails;
