const mongoose = require("mongoose");
const express = require("express");

function dbConnect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/user")
    .then(() => console.log("Connected!"));
}
module.exports = dbConnect;
