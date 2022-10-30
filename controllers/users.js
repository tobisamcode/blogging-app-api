const User = require("../models/users");
const jwt = require("jsonwebtoken");

const createToken = _id => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // createToken
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;

  try {
    const user = await User.signup(email, password, first_name, last_name);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, first_name, last_name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
