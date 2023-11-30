import React from "react";

const AddCourier = () => {
  return (
    <div className=" flex justify-center items-center flex-col shadow-lg w-[90%] md:w-[50%] m-auto">
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-blue-600">Add a Tracker</h2>
      </div>
      <form action="" className="w-[80%]" onSubmit={"HandleSubmit"}>
        <div className="my-5 ">
          <label className="" htmlFor="">
            Details
          </label>
          <input
            type="text"
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
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Reciever Name
          </label>
          <input
            type="text"
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
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Tracking Status
          </label>

          <select name="" id="" className="w-full p-3 border border-blue-200  ">
            <option value="HOLD">HOLD</option>
            <option value="PENDING">PENDING</option>
            <option value="DELIVERED">DELIVERED</option>
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

export default AddCourier;
