const express = require("express");
const controller = {
  home: (req, res) => {
    res.send("this is home page from controller");
  },
  about: (req, res) => {
    res.send("about page");
  },
};
module.exports = controller;
