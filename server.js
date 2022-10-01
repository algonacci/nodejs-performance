const express = require("express");
const cluster = require("cluster");
const os = require("os");

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
  const NUM_WORKER = os.cpus().length;
  for (let i = 0; i < NUM_WORKER; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started");
  app.listen(3000);
}
