import PropTypes from "prop-types";
import { CiCircleCheck } from "react-icons/ci";
const Features = ({ feature }) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 ">
        <CiCircleCheck className="text-green-800 bg-green-400 rounded-full" />
        <h3 className="font-medium text-sm pt-2">{feature}</h3>
      </div>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};
export default Features;
