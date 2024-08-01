const express = require("express");
const { upload, uploadImages } = require("../controllers/imageUpload.controller");

const router = express.Router();

router.post("/api/upload-images", upload.array("images"), uploadImages);

module.exports = router;
