const express = require("express");
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const mongodb = require('../mongodb');

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, idToken } = req.body;

    // Check if the user already exists
    const existingUser = await mongodb.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    if (idToken) {
      // Verify Google idToken
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const { name, email } = ticket.getPayload();

      // Check if user already exists
      const userExists = await mongodb.findOne({ email });
      if (userExists) {
        return res.status(400).send('User already exists');
      }
      res.send('Sign up successful');
    } else {
      // Create new user with email and password
      const user = await mongodb.create({ name, email, password });

      res.redirect('/');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
