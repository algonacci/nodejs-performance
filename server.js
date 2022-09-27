const express = require("express");

app = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send("Performance Example");
});

app.get("/timer", (req, res) => {
  // Delay the response
  delay(9000);
  res.send("... ... ...");
});

app.listen(3000);
