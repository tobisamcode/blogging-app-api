const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const { Schema } = mongoose;

userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: [true, "email already existed, please try another mail"]
  },

  password: {
    type: String,
    required: true
  }
});

// static signup method
userSchema.statics.signUP = async function(email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough!");
  }

  const exists = this.findOne({ email });

  if (exists) {
    throw Error("Email already in use!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email: email, password: hash });
  return user;
};

// static login method
userSchema.statics.login = async function(email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email!");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password!");
  }
};
