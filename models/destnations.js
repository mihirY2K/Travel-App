const mongoose = require("mongoose");

const destSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   weather: {
      type: String,
      required: true
   },
   imageUrl: {
      type: String,
      required: true
   },
   addedAt: {
      type: Date,
      required: true
   }
});

const destination = mongoose.model("Destination", destSchema);
module.exports = destination;
