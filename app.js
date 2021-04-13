const express = require("express");
const http = require("http");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Gaurav Lohia homepage");
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`HTTP server started on port ${port}`);
});
