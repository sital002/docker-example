console.log("Hello World this is a test !");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World is not working properly!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
