const express=require("express");
const { route }=require('express/lib/application');
const mongoose  = require("mongoose");
const SignUpRouter=express.Router();


SignUpRouter
.route('/')
.get(getSignUp)
.post(postSignUp)


function getSignUp(req,res){
   
}
async function postSignUp(req,res){
    console.log(req.body);
}

module.exports=SignUpRouter;
 
