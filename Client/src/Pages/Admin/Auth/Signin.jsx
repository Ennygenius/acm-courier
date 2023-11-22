import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Base } from "../../../axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();
  const URI = "/auth/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMessage] = useState("");

  const showPassword = () => {
    setIsVisible(!isVisible);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const fetchUser = await Base.post(URI, {
      email,
      password,
    });

    const { Atoken, msg } = fetchUser?.data;

    localStorage.setItem("Atoken", Atoken);

    if (msg) {
      setMessage(msg);
      // alert(msg, "credentials invalid");
      toast(msg);
    } else {
      handleLogin();
      navigate("/admin");
    }
  };
  return (
    <div className="h-[70vh] flex justify-center items-center flex-col shadow-lg w-[90%] md:w-[50%] m-auto">
      {msg && <ToastContainer />}
      <div className="">
        <h2 className="font-bold text-2xl text-blue-600">ADMIN LOGIN</h2>
      </div>
      <form action="" className="w-[80%]" onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full my-5 p-3 border border-blue-200"
          placeholder="eg george@gmail.com"
        />
        <div className="flex items-center border border-blue-200">
          {isVisible ? (
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="w-full  p-3 border  "
            />
          ) : (
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="w-full p-3 border "
            />
          )}
          {isVisible ? (
            <span className="" onClick={showPassword}>
              <IoMdEyeOff fontSize={20} />
            </span>
          ) : (
            <span className="" onClick={showPassword}>
              <IoMdEye fontSize={20} />
            </span>
          )}
        </div>
        <br />
        <input
          type="submit"
          className="bg-blue-400 text-white px-5 py-3 cursor-pointer"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Signin;
