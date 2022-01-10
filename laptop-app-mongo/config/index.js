const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.l4eoe.mongodb.net/laptopDB?retryWrites=true&w=majority",
    {},
    (error) => {
      if (error) {
        console.log("Failed to connect to mongoDB");
        return;
      }
      console.log("Connected to mongoDB");
    }
  );
};
