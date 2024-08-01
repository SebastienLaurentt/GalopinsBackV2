const mongoose = require("mongoose");

const RandoSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    memberNumber: {
      type: String,
      required: true,
    },
    elevation: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    images: {
      type: [String], 
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rando", RandoSchema);
