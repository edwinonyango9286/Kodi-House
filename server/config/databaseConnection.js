const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MongodbURI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connect;
