import Courier from "../Models/CourierModels.js";

const getAllCourier = async (req, res) => {
  const courier = await Courier.find({});
  res.json({ courier });
};

const createCourier = async (req, res) => {
  const { TrackingId, USPS, firstName, lastName, email } = req.body;
  const TFind = await Courier.findOne({ TrackingId });
  if (TFind) {
    res.json({ errMsg: "That Tracking id already exists" });
  } else {
    const courier = new Courier({
      TrackingId,
      USPS,
      firstName,
      lastName,
      email,
    });
    try {
      const saveCourier = await courier.save();
      res.json({ courier: saveCourier });
    } catch (error) {
      console.log(error);
    }
  }
};

const deleteCourier = async (req, res) => {
  const courier = await Courier.findByIdAndDelete(req.params.id);
  try {
    if (!courier) {
      res.json({ msg: `no id found of ${req.params.id} found` });
    }
    res.json({ courier });
  } catch (error) {
    console.log(error);
  }
};

export { getAllCourier, createCourier, deleteCourier };
