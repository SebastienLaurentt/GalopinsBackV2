const {
  allInfos,
  addInfo,
  deleteInfo,
  updateInfo,
  getInfoById,
} = require("../controllers/info.controller");
const auth = require("../auth/auth");
const router = require("express").Router();

router.get("/api/infos", allInfos);
router.get("/api/infos/:id",  getInfoById);

router.delete("/api/infos/:id", auth, deleteInfo);
router.put("/api/infos/:id", auth, updateInfo);
router.post("/api/infos", auth, addInfo);

module.exports = router;
