import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const { Admin } = useContext(UserContext);

  const Logout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/admin/signin");
    }
  };

  return (
    <div>
      <div className="">
        <h2>{Admin.username}</h2>
      </div>

      <div className="" onClick={Logout}>
        <h2>Logout</h2>
      </div>
    </div>
  );
};

export default Admin;
