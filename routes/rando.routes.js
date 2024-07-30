
const {
  allRandos,
  addRando,
  deleteRando,
  updateRando,
  getRandoById,
} = require("../controllers/rando.controller");

const router = require("express").Router();

router.get("/api/randos", allRandos);
router.post("/api/randos", addRando);
router.delete("/api/randos/:id", deleteRando);
router.put("/api/randos/:id", updateRando);
router.get("/api/randos/:id", getRandoById);

module.exports = router;
