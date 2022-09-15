const { Router } = require("express");
const ClassesController = require("../controllers/ClassesController");

const router = Router();

router.get("/classes", ClassesController.getAllClasses);
router.get("/classes/:id", ClassesController.findClass);
router.post("/classes", ClassesController.insertClass);
router.put("/classes/:id", ClassesController.updateClass);
router.delete("/classes/:id", ClassesController.deleteClass);

module.exports = router;
