const express = require("express");
const router = express.Router();
const {
  home,
  registerUser,
  login,
  contact,
} = require("../controllers/controller");
router.get("/", home);
router.post("/register", registerUser);
router.post("/login", login);
router.post("/contact", contact);

module.exports = router;
