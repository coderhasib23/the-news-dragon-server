const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
