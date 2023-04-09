const express = require('express');
const mongodb = require("../mongodb");
const ManageUser = express.Router();


// GET all users
ManageUser.route('/ManageUser')
  .get(getUser)
  .post(createUser);

 // DELETE a user
ManageUser.route('/ManageUser/:id')
.delete(deleteUser);

// UPDATE a user
ManageUser.route('/ManageUser/:id')
.put(updateUser);

async function getUser(req, res) {
  try {
    // Find all users in the database
    const users = await mongodb.find();
    // Render the ManageUser view and pass the user data to the view
    res.render("ManageUser", { users: users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

// Handler function to create a new user
async function createUser(req, res) {
  const { name, email, password } = req.body;
  const userExists = await mongodb.findOne({ email });
  if (userExists) {
    return res.status(400).send('User already exists');
  }
  try {
    const user = await mongodb.create({ name, email, password });
    if(user){
      return res.status(400).send('User added successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}
// Handler function to delete a user
async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const result = await mongodb.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
      res.status(200).send("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

// Handler function to update a user
async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  try {
    const result = await mongodb.updateOne({ _id: id }, { name, email, password, role });
    if (result.modifiedCount > 0) {
      res.status(200).send("User updated successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

module.exports = ManageUser;