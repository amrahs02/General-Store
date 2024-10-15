const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const secretKey = process.env.JWT_SECRET; // Use secret key from .env

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (err) {
            return res.status(500).json({ message: "Error in password comparison" });
          }
          if (response) {
            const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });
            res.json({ message: "Success", token: token, email: email });
          } else {
            res.status(401).json({ message: "Invalid_Credentials" });
          }
        });
      } else {
        res.status(404).json({ message: "User_not_found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error" });
      console.log(err);
    });
};

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: "User_already_exists" });
      } else {
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            UserModel.create({ name: name, email: email, password: hash })
              .then((users) => {
                res.json(users);
                console.log(users);
              })
              .catch((err) => {
                res.status(400).json({ message: err.message });
                console.log(err);
              });
          })
          .catch((err) => {
            res.status(400).json({ message: err.message });
            console.log(err);
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error" });
      console.log(err);
    });
};
