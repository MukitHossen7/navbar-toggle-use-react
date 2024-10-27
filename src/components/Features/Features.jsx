import PropTypes from "prop-types";

const Features = ({ feature }) => {
  return (
    <div className="">
      <h3 className="font-medium text-sm">{feature}</h3>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};
export default Features;
