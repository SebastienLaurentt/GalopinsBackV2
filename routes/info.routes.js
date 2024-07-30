const { allInfos, addInfo, deleteInfo, updateInfo } = require("../controllers/post.controller");

const router = require ("express").Router();

router.get("/", allInfos);
router.post("/", addInfo);
router.delete("/:id", deleteInfo);
router.put("/:id", updateInfo);

module.exports = router;