const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const config = require("./db/config"); // Import the database configuration
const userModel = require("./db/userSchema"); // Import the user schema

app.use(express.json());
app.use(cors());

// Signup
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
