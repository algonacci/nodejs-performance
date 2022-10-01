const express = require("express");

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
  delay(4000);
  res.send(`Beep ... Running on ${process.pid}`);
});

console.log("--- Running server.js ---");
console.log("Worker process started");
app.listen(3000);
