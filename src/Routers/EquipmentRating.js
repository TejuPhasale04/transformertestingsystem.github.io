const express = require("express");
const EquipmentRatingRouter = express.Router();
const EquipmentRatingDb = require("../EquipmentRatingDb");
const Test = require("../TestDb");
const mongoose = require("mongoose");


EquipmentRatingRouter.route("/EquipmentRating").get(getEqu).post(postEqu);

async function getEqu(req, res) {
  if (mongoose.connection.readyState !== 1) {
    throw new Error("Failed to connect to database");
  }

  // Query for latest test data
  const latestTest = await Test
    .find()
    .sort({ _id: -1 })
    .limit(1);

  const t2 = latestTest.length > 0 ? latestTest[0]?.Test2 : null;
  
  res.render("EquipmentRating",{t2});
}

async function postEqu(req, res) {
  try {
    // Check if database connection was successful
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Failed to connect to database");
    }

    // Query for latest test data
    const latestTest = await Test
      .find()
      .sort({ _id: -1 })
      .limit(1);

    const t2 = latestTest.length > 0 ? latestTest[0]?.Test2 : null;
 
    // Insert new data into database
    const data = {
      CustomerName: req.body.CustomerName,
      RefStandard: req.body.RefStandard,
      MaxkVa: req.body.MaxkVa,
      LVSideVoltage: req.body.LVSideVoltage,
      HVSideVoltage: req.body.HVSideVoltage,
      AtMaxImpedance: req.body.AtMaxImpedance,
      AtMinImpedance: req.body.AtMinImpedance,
      Temp: req.body.Temp,
      BoosterTransformer: req.body.BoosterTransformer,
      BoosterInputCurrent: req.body.BoosterInputCurrent,
      Dimmer: req.body.Dimmer,
    };
    await EquipmentRatingDb.insertMany([data]);
    res.render("Home");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
}

module.exports = EquipmentRatingRouter;
