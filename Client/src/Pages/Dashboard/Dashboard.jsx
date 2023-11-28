import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Dsh from "../../Components/dsh/Dsh";
import Footer from "../../Components/Footer/Footer";

const Dashboard = () => {
  const { user, Details, message } = useContext(UserContext);
  console.log(user);
  console.log(Details);

  return (
    <>
      <div>
        <Dsh title={"Dashboard"} page={"/ Dashboard"} />
        {/* {user.firstName}
        <br></br> */}
        {Details.map((det, key) => (
          <div key={key}>
            <div className="header p-5 text-xl md:text-2xl uppercase text-teal-900 text-center">
              <h2>Welcome Back: {user.firstName} </h2>
              {det.trackingStatus === "HOLD" && (
                <div className="bg-slate-300 w-[80%] p-2 lg:w-[50%] md:w-[20%] m-auto py-5 my-3">
                  <p className=" font-bold">ON HOLD</p>
                  <p className="text-sm lowercase text-red-500">
                    Please contact customer care or email{" "}
                    <a href="mailto:inuenike@gmail.com"> inuenike@gmail.com</a>
                  </p>
                </div>
              )}
            </div>

            <div className="my-10 text-center flex items-center justify-center mx-5 ">
              <div className="bg-red-500 w-[5%] rounded-full p-5"></div>
              <hr className="border w-20" />
              <div className="bg-red-500 w-[5%] rounded-full p-5"></div>
              <hr className="border w-20" />
              <div className="bg-red-500 w-[5%] rounded-full p-5"></div>
              <hr className="border w-20" />
              <div className="bg-red-500 w-[5%] rounded-full p-5"></div>

              <hr className="border w-20" />
              <div className="bg-red-500 w-[5%] rounded-full p-5"></div>
            </div>

            <div className=" w-[90%] md:w-[60%] m-auto my-5 ">
              <h2 className="text-md text-slate-600 text-center border py-5">
                Shipment information
              </h2>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500  bg-slate-100">
                  Tracking ID
                </h2>
                <h2 className="border w-full text-center py-5 bg-slate-100 sm:text-sm">
                  {user.TrackingId}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  From
                </h2>
                <h2 className="border w-full text-center py-5 "> {det.from}</h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 bg-slate-100">
                  To
                </h2>
                <h2 className="border w-full text-center py-5 bg-slate-100">
                  {det.to}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  Address
                </h2>
                <h2 className="border w-full text-center py-5 ">
                  {det.address}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  Delivery Date
                </h2>
                <h2 className="border w-full text-center py-5 ">
                  {det.deliveryDate}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 bg-slate-100">
                  Service Mode
                </h2>
                <h2 className="border w-full text-center py-5 bg-slate-100">
                  {det.seviceMode}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  USPS
                </h2>
                <h2 className="border w-full text-center py-5 ">{user.USPS}</h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 bg-slate-100">
                  Weight
                </h2>
                <h2 className="border w-full text-center py-5 bg-slate-100">
                  {det.weight}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  Status
                </h2>
                {det.trackingStatus === "SUCCESS" ? (
                  <h2 className="border w-full text-center text-green-600 py-5 text-xl font-bold ">
                    {det.trackingStatus}
                  </h2>
                ) : (
                  <h2 className="border w-full text-center py-5 text-red-600 text-xl font-bold ">
                    {det.trackingStatus}
                  </h2>
                )}
              </div>
            </div>
            <div className=" w-[90%] md:w-[60%] m-auto my-5">
              <h2 className="text-md text-slate-600 text-center border py-5">
                Reciever information
              </h2>
              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 bg-slate-100">
                  Reciever Name
                </h2>
                <h2 className="border w-full text-center py-5 bg-slate-100">
                  {det.recieverName}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  Reciever Number
                </h2>
                <h2 className="border w-full text-center py-5 ">
                  {det.recieverNumber}
                </h2>
              </div>
            </div>
            <div className=" w-[90%] md:w-[60%] m-auto my-5">
              <h2 className="text-md text-slate-600 text-center border py-5">
                Shipper information
              </h2>
              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 bg-slate-100">
                  Shipper Name
                </h2>
                <h2 className="border w-full text-center py-5 bg-slate-100">
                  {user.firstName}
                </h2>
              </div>

              <div className="flex justify-evenly border-none">
                <h2 className="border w-full text-center py-5 text-slate-500 ">
                  Shipper Email
                </h2>
                <h2 className="border w-full text-center py-5 ">
                  {user.email}
                </h2>
              </div>
            </div>
            <div className="package">
              <img src={det.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
