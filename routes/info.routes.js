const { allInfos, addInfo, deleteInfo, updateInfo } = require("../controllers/post.controller");

const router = require ("express").Router();

router.get("/api/infos", allInfos);
router.post("/api/info", addInfo);
router.delete("/api/info/:id", deleteInfo);
router.put("/api/infos/:id", updateInfo);

module.exports = router;