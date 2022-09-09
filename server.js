const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;
routes(app);

app.listen(port, () =>
  console.log(`(INFO) API is running, access: http://localhost:${port}/`)
);

module.exports = app;
