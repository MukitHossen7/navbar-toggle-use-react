import PropTypes from "prop-types";
import Features from "../Features/Features";

const GymOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white px-5 py-4 rounded-xl flex flex-col ">
      <h2 className="text-center pb-3">
        <span className="text-6xl font-bold">{price}</span>
        <span className="text-2xl font-medium">/mon</span>
      </h2>
      <h3 className="font-medium text-2xl pb-6 text-center">{name}</h3>
      <div className=" pl-5 flex-grow ">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-green-500 py-2 font-bold rounded-lg mt-6">
        Buy Now
      </button>
    </div>
  );
};

GymOption.propTypes = {
  option: PropTypes.object,
};
export default GymOption;
