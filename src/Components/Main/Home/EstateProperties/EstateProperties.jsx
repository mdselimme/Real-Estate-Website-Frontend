import EstatePropertie from "./EstatePropertie/EstatePropertie";

import useAllHomes from "../../../Shared/useAllHomes/useAllHomes";

const EstateProperties = () => {
  const { residents } = useAllHomes();

  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-5">Recommended For You</h1>
          <p className="text-base leading-9 font-medium text-[rgba(78,92,125)]">
            Discover the perfect home with our tailored real estate
            recommendations find <br /> properties that match your needs and
            lifestyle today!
          </p>
        </div>
        <div className="grid grid-cols-3 justify-between items-start gap-16 mt-8 mb-14">
          {residents.slice(0, 6).map((residentData) => (
            <EstatePropertie
              key={residentData._id}
              resident={residentData}
            ></EstatePropertie>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstateProperties;
