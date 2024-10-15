const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const smartphoneRoutes = require("./routes/smartphoneRoutes");
const gadgetRoutes = require("./routes/gadgetRoutes");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
// const passport = require("passport");
const UserModel = require("./models/User");
const bcrypt = require("bcrypt");
// const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config(); // Load environment variables

// const secretKey = j8ousiduouoisuoesuois; // Secret key for JWT
// app.use(bodyParser.json());

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// //middleware
// const isAuthenticated = (req, res, next) => {

//   // Get the token from the header
//   if()
  
//   next();
// };

// // Example usage
// app.get('/protectedRoute', isAuthenticated, (req, res) => {
//   // This route is protected by the authentication middleware
//   res.json({ message: 'Protected data' });
// });




// // Configure Passport's local strategy
// passport.use(
//   new LocalStrategy(
//     { usernameField: "email" },
//     async (email, password, done) => {
//       try {
//         const user = await UserModel.findOne({ email });
//         if (!user) {
//           return done(null, false, { message: "Incorrect email" });
//         }
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (isValidPassword) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: "Incorrect password" });
//         }
//       } catch (err) {
//         return done(err);
//       }
//     }
//   )
// );

// app.use(passport.initialize());

// const localAuthMiddleware = passport.authenticate("local", { session: false });

app.use("/", userRoutes);
app.use("/api/smartphones", smartphoneRoutes);
app.use("/api/gadgets", gadgetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
