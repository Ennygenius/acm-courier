import React, { useEffect, useState } from "react";
import { Base } from "../../../axios/axios";

const AddTrack = () => {
  const URI3 = `trackingInfo/`;
  const URI4 = "courier/";
  const [data, setdata] = useState([]);
  const [courier, setCourier] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [goodsDetails, setDetails] = useState("");
  const [weight, setWeight] = useState(Number);
  const [address, setAddress] = useState("");
  const [recieverName, setRecieverName] = useState("");
  const [recieverNumber, setRecieverNumber] = useState("");
  const [trackingStatus, setTrackingStatus] = useState("");
  const [seviceMode, setSeviceMode] = useState("");
  const AddTrans = async () => {
    const base = await Base.post(URI3, {
      courier,
      from,
      to,
      goodsDetails,
      address,
      recieverName,
      recieverNumber,
      weight,
      seviceMode,
      trackingStatus,
    });
  };

  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      if (
        !courier ||
        !from ||
        !to ||
        !goodsDetails ||
        !address ||
        !recieverName ||
        !recieverNumber ||
        !weight ||
        !seviceMode ||
        !trackingStatus
      ) {
        alert("fill in the fields");
      } else {
        AddTrans();
        alert("success");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Base.get(URI4);
      setdata(response.data.courier);
      console.log(response.data.courier);
    };

    fetchData();
  }, []);

  return (
    <div className="absolute text-white w-full bg-[rgba(0,0,0,0.5)] p-10 flex justify-center items-center">
      <form
        action=""
        className="bg-white p-5 text-black"
        onSubmit={HandleSubmit}
      >
        <h2 className="text-xl">Add Tracking Details</h2>

        <div className="my-5 ">
          <label className="" htmlFor="">
            Courier
          </label>

          <select
            name=""
            id=""
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => {
              setCourier(e.target.value);
            }}
            value={courier}
          >
            {data.map((data) => (
              <>
                <option key={data._id} value={data._id}>
                  {data._id}
                </option>
              </>
            ))}
          </select>
        </div>

        <div className="my-5 ">
          <label className="" htmlFor="">
            Details
          </label>
          <input
            type="text"
            value={goodsDetails}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Weight
          </label>
          <input
            type="text"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>
        <div className="my-5">
          <label className="" htmlFor="">
            From
          </label>
          <input
            type="text"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            To
          </label>
          <input
            type="text"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Reciever Name
          </label>
          <input
            value={recieverName}
            type="text"
            onChange={(e) => {
              setRecieverName(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Reciever Number
          </label>
          <input
            type="text"
            value={recieverNumber}
            onChange={(e) => {
              setRecieverNumber(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Tracking Status
          </label>

          <select
            name=""
            id=""
            value={trackingStatus}
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => {
              setTrackingStatus(e.target.value);
            }}
          >
            <option value="HOLD">HOLD</option>
            <option value="PENDING">PENDING</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Service Mode
          </label>

          <select
            name=""
            id=""
            value={seviceMode}
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => {
              setSeviceMode(e.target.value);
            }}
          >
            <option value="AIR">AIR</option>
            <option value="SHIP">SHIP</option>
            <option value="LAND">LAND</option>
          </select>
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

export default AddTrack;
