const express = require("express");
const LoginRouter = express.Router();
const mongodb = require("../mongodb");


LoginRouter.get("/login", (req, res) => {
  res.render("login");
});

LoginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)
try {
  const user = await mongodb.findOne({ email });
   
  if (!user) {
    return res.status(401).send("Invalid Credentials");
  }
  if (user.password !== password) {
    return res.status(401).send("Invalid Credentials");
  }
  
  const {role} = user; // Retrieve the role property from the user object
  res.status(200).json({ role }); 
  if(role=="1"){
    res.redirect("/admin");   
  }
  else{    
     
  }

} catch (err) {
  console.error(err);
  res.status(500).send("Server Error");
}
});

LoginRouter.get("/test", (req, res) => {
  res.render("test");
});

LoginRouter.post("/test", async (req, res) => {
  const { Test1, Test2, Test3 } = req.body;
  console.log(req.body);
  try {
    // Add your code to save the test data to your database here
    res.status(200).send("Test data saved successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = LoginRouter;
