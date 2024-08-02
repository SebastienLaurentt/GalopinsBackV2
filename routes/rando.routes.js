const auth = require("../auth/auth");
const {
  allRandos,
  addRando,
  deleteRando,
  updateRando,
  getRandoById,
} = require("../controllers/rando.controller");

const router = require("express").Router();

router.get("/api/randos", allRandos);
router.get("/api/randos/:id", getRandoById);

router.post("/api/randos", auth, addRando);
router.delete("/api/randos/:id", auth, deleteRando);
router.put("/api/randos/:id", auth, updateRando);

module.exports = router;
