import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <li className=" px-3 md:px-0 hover:bg-white ">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
