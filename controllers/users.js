const User = require("../models/users");
const jwt = require("jsonwebtoken");

const createToken = (_id, email) => {
  return jwt.sign({ id: _id, email: email }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // createToken
    const token = createToken(user._id, email);

    res.status(200).json({ message: "Login successful", email, token });
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
    const token = createToken(user._id, email);

    res.status(200).json({
      message: "Signup was successful",
      user: { email, first_name, last_name, token }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
