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

export default Link;
