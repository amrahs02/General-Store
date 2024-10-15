const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/userControllers");

router.post("/login", loginUser);
router.post("/register", registerUser);

router.get("/test", (req, res) => {
  res.json("Test route");
});

const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");


router.get("/user", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    UserModel.findById(decoded.id).then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ name: user.name, email: user.email });
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;

module.exports = router;
