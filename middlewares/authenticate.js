const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  let token = req.get("Authorization");

  if (token === null || token === undefined) {
    return res.status(403).json({ error: "forbidden" });
  }

  token = req.get("Authorization").replace("Bearer ", "").trim();

  try {
    const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ error: "not authorized" });
  }

  next();
};

module.exports = authenticate;
