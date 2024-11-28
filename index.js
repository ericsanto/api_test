const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Opa!!");
});

app.listen(8080, () => {
  console.log("Api, ready!!!! Port 8080");
});
