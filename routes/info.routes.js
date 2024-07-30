const { allInfos, addInfo, deleteInfo, updateInfo, getInfoById } = require("../controllers/info.controller");

const router = require("express").Router();

router.get("/api/infos", allInfos);
router.post("/api/infos", addInfo);
router.delete("/api/infos/:id", deleteInfo);
router.put("/api/infos/:id", updateInfo);
router.get("/api/infos/:id", getInfoById); 


module.exports = router;
