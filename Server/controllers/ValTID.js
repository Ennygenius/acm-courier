import Courier from "../Models/CourierModels.js";
import jwt from "jsonwebtoken";

const valTID = async (req, res) => {
  const { TrackingId } = req.body;
  try {
    if (!TrackingId) {
      return res.json({ message: "Fill in the field" });
    }
    const courier = await Courier.findOne({ TrackingId });

    if (!courier) {
      return res.json({ message: "Tracking ID not found" });
    }

    const payload = { courier };

    const token = jwt.sign(payload, process.env.Secret, {
      expiresIn: "10d",
    });

    if (courier) {
      return res.json({
        TrackingId,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    console.log(error);
  }
};

export { valTID, getUser };
