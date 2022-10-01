const express = require("express");
const cluster = require("cluster");

app = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance Example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  // Delay the response
  delay(9000);
  res.send(`... ... ... Running on ${process.pid}`);
});

console.log("--- Running server.js ---");
if (cluster.isMaster) {
  console.log("Master has been started");
  cluster.fork();
  cluster.fork();
} else {
  console.log("Worker process started");
  app.listen(3000);
}
