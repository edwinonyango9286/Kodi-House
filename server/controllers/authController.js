const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
const emailValidator = require("email-validator");
const User = require("../models/userModel");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  try {
    if (emailValidator.validate(email)) {
      const user = await User.findOne({ email: email });
      if (!user) {
        const newUser = await User.create(req.body);
        res.json(newUser);
      } else {
        throw new Error(
          "An account with this email already exist. Login instead."
        );
      }
    } else {
      throw new Error("Invalid email address.");
    }
  } catch (error) {}
});

module.exports = { createUser };
