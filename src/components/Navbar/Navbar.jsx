import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/blog", name: "Blog" },
  ];

  return (
    <div className=" md:flex gap-10">
      <button onClick={handleClick}>
        {open ? (
          <IoMdClose className="md:hidden text-xl" />
        ) : (
          <CiMenuFries className="md:hidden" />
        )}
      </button>
      {routes.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
    </div>
  );
};

export default Navbar;
