import React from "react";
import { BiSolidTruck } from "react-icons/bi";
import { Link } from "react-router-dom";

const MNav = () => {
  return (
    <nav className="">
      <div className="">
        <ul className=" flex flex-col items-center justify-center md:hidden font-bold text-sm capitalize">
          <li className="py-5 hover:text-blue-300 ">
            {" "}
            <Link>Add Tracking</Link>
          </li>
          <li className="py-5 hover:text-blue-300 ">
            {" "}
            <Link>Add Courier</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MNav;
