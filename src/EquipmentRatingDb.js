const mongoose=require("mongoose");
const connection=require("./Connection");
const EquipmentRatingSchema=new mongoose.Schema({

    CustomerName:{
        type:String
    },    
    RefStandard:{
        type:String
    },  
    MaxkVa:{
        type:String
    },  
    LVSideVoltage:{
        type:String
    },  
    HVSideVoltage:{
        type:String
    },  
    AtMaxImpedance:{
        type:String
    },  
    AtMinImpedance:{
        type:String
    },  
    Temp:{
        type:String
    },  
    BoosterTransformer:{
        type:String
    },  
    BoosterInputCurrent:{
        type:String
    },  
    Dimmer:{
        type:String
    }
})

const Equ=new mongoose.model("EquipmentRating",EquipmentRatingSchema);
module.exports=Equ;