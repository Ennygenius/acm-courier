import Admin from "../Models/Admin.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, username, password, repeatPassword } = req.body;
  try {
    if (!email || !username || !password || !repeatPassword) {
      return res.json({ message: "Please fill out the fields" });
    }

    if (password !== repeatPassword) {
      return res.json({ message: "Password does not match" });
    }

    if (password === username) {
      return res.json({ message: "Password must not be similar to username" });
    }

    const user = await Admin.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Please the email has already been used " });
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    const saveUser = new Admin({
      email,
      username,
      password: hashPassword,
      repeatPassword: hashPassword,
    });

    const save = await saveUser.save();

    return res.json({ user: save });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  //if the fields are empty
  if (!email || !password) {
    return res.json({ msg: "Please fill out the fields" });
  }

  //if the user does not exist
  const user = await Admin.findOne({ email });

  if (!user) {
    return res.json({ msg: "user does not exist" });
  }

  //compare the password
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.json({ msg: "Please the password is wrong" });
  }

  const payload = { user };

  const Atoken = Jwt.sign(payload, process.env.Secret, {
    expiresIn: "5d",
  });

  if (user) {
    res.json({
      email,
      Atoken,
    });
  }
};

export const getMe = async (req, res) => {
  res.json(req.admin);
  // console.log(req.admin);
};
