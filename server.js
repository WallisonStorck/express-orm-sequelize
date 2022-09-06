import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("(INFO) API Online!");
});

app.listen(port, () =>
  console.log(`(INFO) API is running, access: http://localhost:${port}/`)
);
