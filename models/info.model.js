const moongoose = require ("mongoose");

const InfoSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = moongoose.model("Info", InfoSchema);