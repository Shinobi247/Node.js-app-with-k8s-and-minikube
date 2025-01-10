const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('{"response":"Hello from Rahul"}');
});

app.get("/will", (req, res) => {
  res.send('{"response":"Hello, world!"}');
});

app.get("/ready", (req, res) => {
  res.send('{"response":"Great!, it works!"}');
});

app.listen(process.env.PORT || 3000);
module.exports = app;
