import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <ul className="">
        <li>
          <a href={route.path}>{route.name}</a>
        </li>
      </ul>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
