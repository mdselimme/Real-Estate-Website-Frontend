import { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import { IoLocationOutline } from "react-icons/io5";
import { FaBath, FaSquare } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const ViewPropertyDetails = () => {
  const { residentSingleData } = useContext(AuthContext);

  const { id } = useParams();

  const data = residentSingleData.find((ele) => ele.id === id);

  return (
    <div className="container mx-auto py-10 md:px-5">
      {/* <div className="container mx-auto py-10 md:px-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img className="w-full h-96" src={data?.image} alt={data?.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.title}</h2>
          <p>{data?.description}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div> */}
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img
            className="w-full h-[25rem] rounded-2xl"
            src={data?.image}
            alt=""
          />
        </div>
        <div className="bg-[#F3F7FD] p-10 rounded-2xl">
          <div className="bg-white rounded-2xl p-10">
            <p className="text-[#1563df] text-base inline-block hover:text-[#161e2d] py-2 px-6 font-bold rounded-full bg-[#FEECE5] mb-3">
              {data?.status}
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
            <table className="mt-5">
              <tbody>
                <tr>
                  <td><b>Price:</b></td>
                  <td>{data?.price} $</td>
                </tr>
                <tr>
                  <td><b>Status:</b></td>
                  <td>{data?.status}</td>
                </tr>
                <tr>
                  <td><b>Rooms:</b></td>
                  <td>{data?.rooms}</td>
                </tr>
                <tr>
                  <td><b>Bath:</b></td>
                  <td>{data?.bath}</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="tooltip w-full tooltip-black" data-tip="Click for show Details">
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
