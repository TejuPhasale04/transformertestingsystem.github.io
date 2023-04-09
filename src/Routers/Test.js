const express=require("express");
const { route }=require('express/lib/application')
const testRouter=express.Router();
const Test=require("../TestDb");

testRouter
.route('/test')
.get(getTest)
.post(postTest)

function getTest(req,res){
    res.render("Test");
    
}
async function postTest(req,res){
    const data={
        Test1:req.body.Test1,
        Test2:req.body.Test2,
        Test3:req.body.Test3
       }
      // await Test.insertMany([data]);
      await Test.insertMany([data]);  
       res.render("Home")
}
module.exports=testRouter;
