import React from "react";
import { Link } from "react-router-dom";
import { GoHome, GoMortarBoard } from "react-icons/go";
import { GiPortal, GiNewspaper } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
const Navbar = () => {
  const items = [
    { name: "Home", ref: "/home", icon: <GoHome></GoHome> },
    { name: "About", ref: "/about", icon: <GoMortarBoard></GoMortarBoard> },
    { name: "Portfolio", ref: "/portfolio", icon: <GiPortal></GiPortal> },
    { name: "News", ref: "/news", icon: <GiNewspaper></GiNewspaper> },
    { name: "Contact", ref: "/contact", icon: <GrContactInfo></GrContactInfo> },
  ];
  return (
    <div>
      <header className="py-6 ">
        <nav className="flex justify-between">
          <div>
            <img
              src="https://i.ibb.co/W3nxn17/myLoog.png"
              className="rounded-full w-6"
              alt=""
              srcset=""
            />
          </div>
          <div className="sm:hidde md:visible lg:visible">
            {items.map((item) => (
              <Link
                className=" ml-4 hover:text-[#e54b4b] inline-flex items-center font-semibold font-sans"
                to={`${item.ref}`}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
