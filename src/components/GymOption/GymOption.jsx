import PropTypes from "prop-types";
import Features from "../Features/Features";
const GymOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 px-5 py-8 rounded-xl  space-y-3">
      <h2 className="">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-2xl font-medium">/mon</span>
      </h2>
      <h3 className="font-medium text-xl ">{name}</h3>
      {features.map((feature, idx) => (
        <Features key={idx} feature={feature}></Features>
      ))}
    </div>
  );
};

GymOption.propTypes = {
  option: PropTypes.object,
};
export default GymOption;
