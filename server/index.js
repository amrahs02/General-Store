const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./models/models');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sandeepsharma2183:keHzkh5IjZkOGndL@cluster0.t9l79.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// const JWT_SECRET =  

app.post('/login', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        res.json("Success")
                    } else {
                        res.json("Invalid_Credentials")
                    }
                })
            }
            else {
                res.json({ message: "User_not_found" })
            }
        })
})

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  UserModel.findOne({ email: email })
      .then(existingUser => {
          if (existingUser) {
              // If user exists, return a message
              return res.json({ message: "User_already_exists" });
          } else {
              // If user does not exist, proceed with registration
              bcrypt.hash(password, 10)
                  .then(hash => {
                      UserModel.create({ name: name, email: email, password: hash })
                          .then(users => {
                              res.json(users);
                              console.log(users);
                          })
                          .catch(err => {
                              res.status(400).json({ message: err.message });
                              console.log(err);
                          });
                  })
                  .catch(err => {
                      res.status(400).json({ message: err.message });
                      console.log(err);
                  });
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Server error" });
          console.log(err);
      });
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
