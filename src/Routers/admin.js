const express = require('express');
const BOM = require('../BOMDB');

const adminrouter = express.Router();

// Render the admin form
adminrouter.get('/admin', (req, res) => {
  res.render('admin');
});

// Handle form submission
adminrouter.post('/admin', async (req, res) => {
  try {
    // Get the submitted price and discount values for each item
    const bomData = {
      windingResistanceMeter: {
        price: parseFloat(req.body.windingResistanceMeterPrice),
        discount: parseFloat(req.body.windingResistanceMeterDiscount),
      },
      insulationResistanceTester: {
        price: parseFloat(req.body.insulationResistanceTesterPrice),
        discount: parseFloat(req.body.insulationResistanceTesterDiscount),
      },
      voltageRatioMeter: {
        price: parseFloat(req.body.voltageRatioMeterPrice),
        discount: parseFloat(req.body.voltageRatioMeterDiscount),
      },
      transformerTurnsRatioMeter: {
        price: parseFloat(req.body.transformerTurnsRatioMeterPrice),
        discount: parseFloat(req.body.transformerTurnsRatioMeterDiscount),
      },
      boosterTransformer: {
        price: parseFloat(req.body.boosterTransformerPrice),
        discount: parseFloat(req.body.boosterTransformerDiscount),
      },
      cts: {
        price: parseFloat(req.body.ctsPrice),
        discount: parseFloat(req.body.ctsDiscount),
      },
      currentTransformer: {
        price: parseFloat(req.body.currentTransformerPrice),
        discount: parseFloat(req.body.currentTransformerDiscount),
      },
      pts: {
        price: parseFloat(req.body.ptsPrice),
        discount: parseFloat(req.body.ptsDiscount),
      },
      powerAnalyzer: {
        price: parseFloat(req.body.powerAnalyzerPrice),
        discount: parseFloat(req.body.powerAnalyzerDiscount),
      },
      isolatorSwitch: {
        price: parseFloat(req.body.isolatorSwitchPrice),
        discount: parseFloat(req.body.isolatorSwitchDiscount),
      },
      temperatureScanner: {
        price: parseFloat(req.body.temperatureScannerPrice),
        discount: parseFloat(req.body.temperatureScannerDiscount),
      },
      rtdSensor: {
        price: parseFloat(req.body.rtdSensorPrice),
        discount: parseFloat(req.body.rtdSensorDiscount),
      },
      multimeter: {
        price: parseFloat(req.body.multimeterPrice),
        discount: parseFloat(req.body.multimeterDiscount),
      },
      impulseTester: {
        price: parseFloat(req.body.impulseTesterPrice),
        discount: parseFloat(req.body.impulseTesterDiscount),
      },
      pdTester: {
        price: parseFloat(req.body.pdTesterPrice),
        discount: parseFloat(req.body.pdTesterDiscount),
      }
    };
    console.log(bomData);
    // Update the prices and discounts in the BOM
    await BOM.updateOne({}, bomData);

    // Redirect back to the admin form
    res.redirect('/admin');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = adminrouter;
