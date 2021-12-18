// index.js

/**
 * Required External Modules
 */

const express = require("express");

const path = require("path");

/**
 * App Variables
 */

const app = express();

const port = process.env.PORT || "8000";

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.get("", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`Listening to requests on port: ${port}`);
});
