const { Router } = require("express");
const LevelsController = require("../controllers/LevelsController");

const router = Router();

router.get("/levels", LevelsController.getAllLevels);
router.get("/levels/:id", LevelsController.findLevel);
router.post("/levels", LevelsController.insertLevel);
router.put("/levels/:id", LevelsController.updateLevel);
router.delete("/levels/:id", LevelsController.deleteLevel);

module.exports = router;
