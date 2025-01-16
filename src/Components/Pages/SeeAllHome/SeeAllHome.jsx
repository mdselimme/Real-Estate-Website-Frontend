import { Helmet } from "react-helmet";
import EstatePropertie from "../../Main/Home/EstateProperties/EstatePropertie/EstatePropertie";
import useAuth from "../../Shared/useAuth/useAuth";

const SeeAllHome = () => {
  const { residentSingleData } = useAuth();

  return (
    <div>
      <Helmet>
        <title>See All Home - Home Lengo</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-5">See All Our Homes</h1>
          <p className="text-base leading-9 font-medium text-[rgba(78,92,125)]">
            Discover the perfect home with our tailored real estate
            recommendations find <br /> properties that match your needs and
            lifestyle today!
          </p>
        </div>
        <div className="grid grid-cols-3 justify-between items-start gap-16 mt-8 mb-14">
          {residentSingleData.map((residentData) => (
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

export default SeeAllHome;
