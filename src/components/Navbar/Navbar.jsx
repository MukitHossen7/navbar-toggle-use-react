import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/blog", name: "Blog" },
  ];

  return (
    <div className=" md:flex gap-10">
      {routes.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
    </div>
  );
};

export default Navbar;
