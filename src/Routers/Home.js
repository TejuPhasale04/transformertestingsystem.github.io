const express=require("express");
const { route }=require('express/lib/application')
const homeRouter=express.Router();
const mongodb=require("../mongodb");

homeRouter
.route('/')
.get(getHome)
.post(setlogin)


async function getHome(req,res){

    res.render("Home");

}
async function setlogin(req,res){
  const { email, password } = req.body;
  //console.log(req.body);
  try {
    const user = await mongodb.findOne({ email }); // use findOne instead of find

      if(user.email==email  && user.password==password){
        const { role } = user; // Retrieve the role property from the user object
          res.status(200).json({ role }); // send the role as JSON

      }else if(user.email!=email  && user.password!=password ){
        return res.status(401).send("Invalid Credentials");
      }
   

  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

module.exports=homeRouter;
