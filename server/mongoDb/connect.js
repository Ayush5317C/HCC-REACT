const mongoose = require("mongoose");

const connectToDB = async (url) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection is successfully established with MONGO DB");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectToDB;