const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/people", PeopleController.getAllPeople);
router.get("/people/:id", PeopleController.findPerson);
router.post("/people", PeopleController.insertPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.deletePerson);

router.get(
  "/people/:studentId/enrollment/:enrollmentId",
  PeopleController.getOneEnrollment
);

module.exports = router;
