const bodyParser = require("body-parser");
const people = require("./peopleRouter");
const classes = require("./classesRouter");
const levels = require("./levelsRouter");
const enrollments = require("./enrollmentsRouter");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(people, classes, levels, enrollments);

  app.get("/", (req, res) => res.status(200).send("Hello World!"));
};
