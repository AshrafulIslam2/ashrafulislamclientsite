import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const items = [
    { name: "Home", ref: "/home" },
    { name: "About", ref: "/about" },
    { name: "Portfolio", ref: "/portfolio" },
    { name: "News", ref: "/news" },
    { name: "Contact", ref: "/contact" },
  ];
  return (
    <div>
      <header className="">
        <nav className="flex sm:justify-between p-4 sm:p-4">
          <div>
            <img
              src="https://i.ibb.co/W3nxn17/myLoog.png"
              className="rounded-full w-6"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex  justify-center items-center">
            {items.map((item) => (
              <Link
                className=" flex  justify-center  items-center text-[10px] sm:text-base ml-4 hover:text-[#e54b4b]  font-semibold font-sans"
                to={`${item.ref}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
