const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const generateUserId = require("../utils/generateUserId");
const generateAccessToken = require("../utils/generateAccessToken");

//register function to create a user

const register = async (req, res) => {
  const newUser = req.body;
  const userId = generateUserId(newUser.email); //generate user id

  const accessToken = generateAccessToken({ ...newUser, userId }); //generate access token

  // create a user in the database
  const user = await User.create({
    ...req.body,
    userId,
    accessToken: accessToken,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ id: user.userId, accessToken: user.accessToken });
};

//login function to get a user with a specific id
const login = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check marketingConsent and omit email if false
    const userResponse = {
      id: user.userId,
      firstName: user.firstName,
      secondName: user.secondName,
      ...(user.marketingConsent && { email: user.email }),
    };

    res.json(userResponse);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  login,
};
