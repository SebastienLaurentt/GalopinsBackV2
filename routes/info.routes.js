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
router.post("/api/infos", addInfo);

router.delete("/api/infos/:id", auth, deleteInfo);
router.put("/api/infos/:id", auth, updateInfo);
router.get("/api/infos/:id", auth, getInfoById);

module.exports = router;
