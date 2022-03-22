const express = require("express");

const User = require("../model/user");
const Message = require("../model/message");
const controller = {
  home: (req, res) => {
    res.send("this is home page from controller");
  },
  registerUser: async (req, res) => {
    console.log(req.body);
    const { name, email, password, confirmPassword } = req.body;
    const newUser = await new User({ name, email, password, confirmPassword });
    await newUser.save();
    res.send("user added");
  },
  login: async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      if (existUser.password === password) {
        console.log("login successfully");
        res.send("login successfully");
      } else {
        console.log("invalid Credential");
      }
    } else {
      console.log("user not exist");
    }
  },
  contact: async (req, res) => {
    console.log(req.body);
    const message = await new Message(req.body);
    await message.save();
    res.send("message sent");
  },
};
module.exports = controller;
