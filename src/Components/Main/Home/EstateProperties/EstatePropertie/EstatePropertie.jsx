import PropTypes from "prop-types";

const EstatePropertie = ({ resident }) => {
  return (
    <div className="card bg-base-100 w-[28rem] shadow-xl">
      <figure>
        <img src={resident?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{resident?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

EstatePropertie.propTypes = {
  resident: PropTypes.node,
};

export default EstatePropertie;
