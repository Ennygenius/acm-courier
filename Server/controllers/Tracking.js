import TrackInfo from "../Models/TrackingInfo.js";

import { v2 as cloudinary } from "cloudinary";

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
  const {
    courier,
    trackingStatus,
    from,
    to,
    seviceMode,
    weight,
    goodsDetails,
    address,
    deliveryDate,
    recieverName,
    recieverNumber,
  } = req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const info = await TrackInfo.create({
      courier,
      goodsImage: result.secure_url,
      trackingStatus,
      from,
      to,
      seviceMode,
      weight,
      goodsDetails,
      address,
      deliveryDate,
      recieverName,
      recieverNumber,
    });
    if (!info) {
      return res.json({ message: "please the fields are required" });
    }
    // console.log(req.file, req.body);
    res.json({ info });
  } catch (error) {
    console.log(error);
  }
};

const updateInfo = async (req, res) => {
  const {
    courier,
    trackingStatus,
    from,
    to,
    // goodsImage,
    seviceMode,
    weight,
    goodsDetails,
    address,
    deliveryDate,
    recieverName,
    recieverNumber,
  } = req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file?.path);
    console.log(result);
    console.log();
    const info = await TrackInfo.findByIdAndUpdate(req.params.id, {
      courier,
      goodsImage: result.secure_url,

      trackingStatus,
      from,
      to,
      seviceMode,
      weight,
      goodsDetails,
      address,
      deliveryDate,
      recieverName,
      recieverNumber,
    });
    res.json({ info });
  } catch (error) {
    console.log(error, "an error occured");
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
    // console.log(info);
  } catch (error) {
    console.log(error);
  }
};

export { getAllTInfo, createInfo, updateInfo, deleteInfo, getSingleTrack };
