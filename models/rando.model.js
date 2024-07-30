const moongoose = require("mongoose");

const RandoSchema = new moongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

module.exports = moongoose.model("Rando", RandoSchema);
