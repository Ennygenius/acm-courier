import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../../Components/Nav/data";
import { FaTruckFast } from "react-icons/fa6";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import MNav from "../../../Components/Nav/MNav";
import { GoIssueTracks } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";

const Admin = () => {
  const navigate = useNavigate();
  const { Admin } = useContext(UserContext);

  const Logout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/admin/signin");
    }
  };

  const [navOpen, setNavOpen] = useState(false);

  const controlNav = () => {
    setNavOpen(!navOpen);
    console.log("clicked");
  };

  return (
    <div className="text-white">
      <nav className=" flex justify-between px-5 md:px-10 py-5 items-center bg-red-500 sticky top-0 ">
        <div className="logo flex items-center text-2xl sm:text-xl md:text-4xl font-bold">
          <FaTruckFast color="rgb(147, 197, 253)" />
          <span className="pl-2">ACM SHIPPING CO.</span>
        </div>

        <div className="hidden md:flex text-sm">Hello, {Admin.username}</div>
        <div className="md:hidden " onClick={controlNav}>
          {navOpen ? (
            <div className="cursor-pointer">
              <AiOutlineClose fontSize={20} />
            </div>
          ) : (
            <div className="bg-btn cursor-pointer px-4 py-2 rounded-full ">
              <AiOutlineAlignRight fontSize={20} color="black" />
            </div>
          )}
        </div>
      </nav>
      <div className="flex ">
        {navOpen && (
          <div className="bg-red-500 md:hidden block w-[50%] h-[100vh] font-bold">
            <ul className="flex flex-col text-center items-center justify-center my-20 capitalize">
              <li className="py-5  ">Add User</li>
              <li className="py-5  ">Add Tracking Details</li>
              <li className="py-5  ">Edit Tracking Details</li>
            </ul>
          </div>
        )}
        <div className="bg-red-500 hidden md:block md:w-[20%] md:h-[100vh] font-bold ">
          <ul className="flex flex-col text-center items-center justify-center my-20 capitalize">
            <li className="py-10">Add User</li>
            <li className="py-10">Add Tracking Details</li>
            <li className="py-10">Edit Tracking Details</li>
          </ul>
        </div>
        <div className=" flex-1 text-black font-light px-2 pt-3">
          <div className="">
            {" "}
            <i>
              <h2>Howdy!! {Admin.username}</h2>
            </i>
          </div>
          <div className="grid md:grid-cols-2 my-10 gap-2 items-center  text-center ">
            <div className="box bg-blue-300 py-5 flex items-center flex-col">
              <GoIssueTracks fontSize={50} />
              <h2 className="text-2xl tracking-wider py-3">Trackers</h2>
              <p className="text-xl">20</p>
            </div>
            <div className="box bg-blue-300 py-5 flex items-center flex-col">
              <HiUsers fontSize={50} />
              <h2 className="text-2xl tracking-wider py-3">Users</h2>
              <p className="text-xl">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
