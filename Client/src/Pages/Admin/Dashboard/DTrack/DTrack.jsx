import React from "react";
import { Base } from "../../../../axios/axios";
import { useParams, useNavigate, redirect } from "react-router-dom";

const DTrack = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const URI = `trackingInfo/${id}`;

  const Delete = async () => {
    try {
      await Base.delete(URI);
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (confirm(`Do you want to delete ${id}`)) {
    Delete();
  } else {
    redirect("/admin");
  }
  return <div></div>;
};

export default DTrack;
