const express=require("express");
const { route }=require('express/lib/application')
const CurrentChartRouter=express.Router();
const CurrentChartDB=require('../CurrentChartDB');
const Equ = require("../EquipmentRatingDb");
const mongoose = require("mongoose");

CurrentChartRouter
.route('/CurrentChart')
.get(getBOM)
.post(postBOM)

async function getBOM(req, res) {
  if (mongoose.connection.readyState !== 1) {
    throw new Error("Failed to connect to database");
  }

  // Query for latest test data
  const equipmentRating = await Equ.find()
    .sort({ _id: -1 })
    .limit(1);

  const kva = equipmentRating.length > 0 ? equipmentRating[0]?.MaxkVa : null;
  const HV = equipmentRating.length > 0 ? equipmentRating[0]?.HVSideVoltage : null;
  const LV = equipmentRating.length > 0 ? equipmentRating[0]?.LVSideVoltage : null;

  res.render("CurrentChart", { kva, HV, LV });
}

async function postBOM(req,res){
    const data={
        rating:req.body.rating,
        HV:req.body.HV,
        FullLoadCurrent:req.body.FullLoadCurrent,
        LV:req.body.LV,
        NoLoadCurrent:req.body.NoLoadCurrent,
        MaxCITap:req.body.MaxCITap,
        MinCTTap:req.body.MinCTTap
       }
       await CurrentChartDB.insertMany([data]);
       res.render("Home")

}
module.exports=CurrentChartRouter;