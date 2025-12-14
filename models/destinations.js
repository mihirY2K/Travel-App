const mongoose = require("mongoose");

const destSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   }
});

const destination = mongoose.model("Destination", destSchema);
module.exports = destination;
