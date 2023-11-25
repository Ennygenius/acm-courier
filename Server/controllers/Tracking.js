import TrackInfo from "../Models/TrackingInfo.js";
import jwt from "jsonwebtoken";
import Courier from "../Models/CourierModels.js";

const getAllTInfo = async (req, res) => {
  try {
    const info = await TrackInfo.find({})
      .populate("courier", "TrackingId email")
      .lean();

    res.json({ info });
  } catch (error) {
    console.log(error);
  }
};

const createInfo = async (req, res) => {
  try {
    const info = await TrackInfo.create(req.body);
    if (!info) {
      res.json("please the fields are required");
    }
    res.json({ info });
  } catch (error) {
    console.log(error);
  }
};

const updateInfo = async (req, res) => {
  try {
    const info = await TrackInfo.findByIdAndUpdate(req.params.id, req.body);

    res.json({ info });
  } catch (error) {
    console.log(error);
  }
};

const deleteInfo = async (req, res) => {
  const info = await TrackInfo.findByIdAndDelete(req.params.id);
  res.json({ info });
};

const getSingleTrack = async (req, res) => {
  try {
    const user = req.user;
    const info = await TrackInfo.find({ courier: user }).populate("courier");
    res.json({ Tinfo: info });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

export { getAllTInfo, createInfo, updateInfo, deleteInfo, getSingleTrack };
