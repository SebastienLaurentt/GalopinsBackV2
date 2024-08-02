const randoModel = require("../models/rando.model");

module.exports.allRandos = async (req, res) => {
  try {
    const docs = await randoModel.find().sort({ createdAt: -1 });
    return res.status(200).send(docs);
  } catch (err) {
    return res.status(400).send("Error");
  }
};

module.exports.getRandoById = async (req, res) => {
  try {
    const rando = await randoModel.findById(req.params.id);
    if (!rando) return res.status(404).send("No rando found");
    return res.status(200).json(rando);
  } catch (err) {
    return res.status(400).send("Error");
  }
};

module.exports.addRando = async (req, res) => {
  const newRando = new randoModel({
    destination: req.body.destination,
    date: req.body.date,
    memberNumber: req.body.memberNumber,
    elevation: req.body.elevation,
    distance: req.body.distance,
    images: req.body.images, 
  });

  try {
    const rando = await newRando.save();
    return res.status(201).json(rando);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports.deleteRando = async (req, res) => {
  try {
    const rando = await randoModel.findByIdAndDelete(req.params.id);
    if (!rando) return res.status(404).send("No item found");
    return res.status(200).send("Deleted");
  } catch (err) {
    return res.status(400).send("Error");
  }
};

module.exports.updateRando = async (req, res) => {
  try {
    const updatedRando = await randoModel.findByIdAndUpdate(
      req.params.id,
      {
        destination: req.body.destination,
        date: req.body.date,
        memberNumber: req.body.memberNumber,
        elevation: req.body.elevation,
        distance: req.body.distance,
        images: req.body.images, 
      },
      { new: true }
    );

    if (!updatedRando) return res.status(404).send("No rando found");
    return res.status(200).json(updatedRando);
  } catch (err) {
    return res.status(400).send("Error");
  }
};
