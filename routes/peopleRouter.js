const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/people", PeopleController.getAllPeople);
router.get("/people/:id", PeopleController.findPerson);
router.post("/people", PeopleController.insertPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.deletePerson);

router.get("/enrollments/", PeopleController.getAllEnrollments); // <<<< MOVER PARA CONTROLLER ENROLLMENTS

router.get(
  "/people/:studentId/enrollment/:enrollmentId",
  PeopleController.getEnrollmentByPerson
);
router.get(
  "/people/:studentId/enrollments",
  PeopleController.getAllEnrollmentsByPerson
);
router.post("/people/:studentId/enroll", PeopleController.createEnrollPerson);
router.put(
  "/people/:studentId/updateEnroll/:enrollmentId",
  PeopleController.updateEnroll
);
router.delete(
  "/people/:studentId/delete/:enrollmentId",
  PeopleController.deleteEnroll
);

module.exports = router;
