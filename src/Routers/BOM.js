const express=require("express");
const { route }=require('express/lib/application')
const BOMRouter=express.Router();
//const userModel=require('../models/userModel')
const BOM = require('../BOMDB');
const Test=require('../TestDb');

BOMRouter
.route('/BOM')
.get(getBOM)
.post(postBom)


async function getBOM(req,res){
  res.render("BOM");
}
async function postBom(req, res) {
  try {
    const bomData = req.body;
    console.log(bomData);
    const result = await BOM.insertMany(bomData);
    res.send(result);
  } catch (err) {
    console.error('Error saving BOM data:', err);
    res.status(500).send('Error saving BOM data');
  }
}

module.exports=BOMRouter;