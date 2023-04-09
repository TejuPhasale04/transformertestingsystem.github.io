const express = require('express');
const BillOfMaterialRouter=express.Router();
BillOfMaterialRouter
.route('/BillOfMaterial')
.get(getBOM)
.post(postBom)


async function getBOM(req,res){
    res.render("BillOfMaterial");
  }
  
  async function postBom(req, res) {
  }
  
  module.exports=BillOfMaterialRouter;