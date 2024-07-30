const infoModel = require("../models/info.model");

module.exports.allInfos = async (req, res) => {
  try {
    const docs = await infoModel.find().sort({ createdAt: -1 });
    return res.status(200).send(docs);
  } catch (err) {
    return res.status(400).send("Error");
  }
};

module.exports.addInfo = async (req, res) => {
  const newInfo = new infoModel({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
  });

  try {
    const info = await newInfo.save();
    return res.status(201).json(info);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports.deleteInfo = async (req, res) => {
  try {
    const info = await infoModel.findByIdAndDelete(req.params.id);
    if (!info) return res.status(404).send("No item found");
    return res.status(200).send("Deleted");
  } catch (err) {
    return res.status(400).send("Error");
  }
};

module.exports.updateInfo = async (req, res) => {
  try {
    const updatedInfo = await infoModel.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        date: req.body.date,
        description: req.body.description,
      },
      { new: true } 
    );

    if (!updatedInfo) return res.status(404).send("No item found");
    return res.status(200).json(updatedInfo);
  } catch (err) {
    return res.status(400).send("Error");
  }
};
