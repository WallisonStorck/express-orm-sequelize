const bodyParser = require("body-parser");
const people = require("./peopleRouter");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(people);

  app.get("/", (req, res) => res.status(200).send("Hello World!"));
};
