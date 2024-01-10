import jwt from "jsonwebtoken";

export const VToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    const payload = jwt.verify(token, process.env.Secret);

    // jwt.verify(token, process.env.Secret, (err, payload) => {
    //   if (err) {
    //     console.log("JWT verification error:", err);
    //     return res.status(401).json({ message: "Unauthorized: Invalid token" });
    //   }
    // });

    req.user = payload.courier; // Set user ID from token payload
    req.admin = payload.user; // Set admin status from token payload

    next();
  } catch (error) {
    console.log("JWT payload error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
