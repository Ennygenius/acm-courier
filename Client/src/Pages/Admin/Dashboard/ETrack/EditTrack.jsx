import React, { useEffect, useState } from "react";
import { Base } from "../../../../axios/axios";
import { useNavigate, useParams } from "react-router-dom";
// import {} from "react-router-dom";

const EditTrack = () => {
  const { id } = useParams();
  const URI = `trackingInfo/${id}`;
  const URI2 = "courier/";
  const URI3 = `login/${id}`;

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [data, setdata] = useState([]);
  const [courier, setCourier] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [goodsDetails, setDetails] = useState("");
  const [weight, setWeight] = useState(Number);
  const [address, setAddress] = useState("");
  const [goodsImage, setGoodsImage] = useState(null);
  const [recieverName, setRecieverName] = useState("");
  const [recieverNumber, setRecieverNumber] = useState("");
  const [trackingStatus, setTrackingStatus] = useState("");
  const [seviceMode, setSeviceMode] = useState("");

  const formData = new FormData();
  formData.append("courier", courier);
  formData.append("from", from);
  formData.append("to", to);
  formData.append("goodsDetails", goodsDetails);
  formData.append("address", address);
  formData.append("weight", weight);
  formData.append("recieverName", recieverName);
  formData.append("recieverNumber", recieverNumber);
  formData.append("seviceMode", seviceMode);
  formData.append("trackingStatus", trackingStatus);
  formData.append("image", goodsImage);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Base.get(URI2);
      setdata(response.data.courier);
      console.log(response.data.courier);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Base.get(URI3);

      const {
        courier,
        from,
        to,
        address,
        weight,
        goodsDetails,
        goodsImage,
        recieverName,
        recieverNumber,
        trackingStatus,
        seviceMode,
      } = response.data.info;

      setUser(response.data.info);
      console.log(response.data.info);
      setCourier(courier);
      setFrom(from);
      setAddress(address);
      setWeight(weight);
      setDetails(goodsDetails);
      setGoodsImage(goodsImage);
      setTo(to);
      setRecieverName(recieverName);
      setRecieverNumber(recieverNumber);
      setTrackingStatus(trackingStatus);
      setSeviceMode(seviceMode);
    };

    fetchData();
  }, []);

  const EditTrans = async () => {
    const base = await Base.patch(URI, formData);
    console.log(base);
  };
  const handleFileChange = (e) => {
    try {
      const file = e.target.files[0];
      setGoodsImage(file);
      console.log(file);
    } catch (error) {
      console.log(error, "An error occured");
      // alert(error, "An error occured");
    }
  };
  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      EditTrans();
      alert("success");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-center items-center flex-col shadow-lg w-[90%] md:w-[50%] m-auto">
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-blue-600">
          Edit Tracking Details
        </h2>
      </div>
      <form
        action=""
        className="w-[80%]"
        onSubmit={HandleSubmit}
        name="Image"
        encType="multipart/form-data"
      >
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
                <option value={data._id}>{data.firstName}</option>
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

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label htmlFor="fileInput">Goods/ Package</label>

          <input
            type="file"
            name="file"
            accept="/image"
            className="w-full p-3 border border-blue-200  "
            id="file"
            onChange={handleFileChange}
          />
          <img src={data.goodsImage} alt="" />
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

export default EditTrack;
