import React from "react";
import { data } from "../Nav/data";
import { Link } from "react-router-dom";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdOutlineAddLocationAlt } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#1F1F2E]">
      <div className="grid md:grid-cols-3 gap-2 md:py-20 py-10 px-5 text-white ">
        <div className="w-[95%] md:w-full">
          <h2 className=" font-bold text-red-500 text-2xl">Get In Touch</h2>
          <div className="flex items-center">
            <MdOutlineAddLocationAlt />
            <p className="pl-3">
              94 High Street WESTERN CENTRAL LONDON WC37 4WP?
            </p>
          </div>
          <div className="flex items-center">
            {" "}
            <FaPhoneAlt />
            <p className="py-5 pl-3">09012113050</p>
          </div>
          <div className="flex items-center">
            <MdEmail />
            <small>
              {" "}
              <p className="pl-3">customercare.acmshippingco@gmail.com</p>
            </small>
          </div>
          <div className="flex my-10">
            <FaFacebook fontSize={30} />
            <span className="px-5">
              {" "}
              <FaWhatsapp fontSize={30} />
            </span>
            <FaInstagram fontSize={30} />
          </div>
        </div>
        <div className="">
          <h2 className=" font-bold text-red-500 text-2xl">Quick Links</h2>
          {data.map((data) => (
            <Link to={data.link}>
              <li className="capitalize py-2">{data.name}</li>
            </Link>
          ))}
        </div>
        <div className="w-[85%]md:w-full">
          <h2 className=" font-bold text-red-500 text-2xl">NewsLetter</h2>
          <p>
            Stay informed – subscribe to our FREIGHT CONNECTIONS newsletter and
            get regular updates about the world of logistics.
          </p>
          <div className=" py-10">
            <input
              type="text"
              className="px-10 py-3 outline-none my-2 mr-3 w-[95%] md:w-[100%] text-slate-500"
              placeholder="e.g inuenike@gmail.com....."
              required
            />
            <button className="bg-blue-500 btn text-white">Submit</button>
          </div>
        </div>
      </div>
      <small>
        <p className="text-center text-white py-5">
          copyright @ 2023 | Designed and Developed by Chief George
        </p>
      </small>
    </div>
  );
};

export default Footer;
