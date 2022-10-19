//jshint esversion:6

const express = require("express");

const app = express();
const path = require("path");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  })

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});