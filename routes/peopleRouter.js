const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/people", PeopleController.getActivePeople);
router.get("/people/all", PeopleController.getAllPeople);
router.get("/person/:id", PeopleController.findPerson);
router.post("/person", PeopleController.insertPerson);
router.put("/person/:id", PeopleController.updatePerson);
router.delete("/person/:id", PeopleController.deletePerson);
router.post("/person/:id/restore/", PeopleController.restorePerson);

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
