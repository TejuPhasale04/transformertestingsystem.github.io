const connection=require("./Connection");
const mongoose=require("mongoose");

const CurrentChartSchema=new mongoose.Schema({
    rating:{
        type:String
    },
    HV:{
        type:String
    },
    FullLoadCurrent:{
        type:String
      
    },
    LV:{
        type:String
    },
    NoLoadCurrent:{
        type:String
    },
    MaxCITap:{
        type:String  
    },
    MinCTTap:{
        type:String  
    }

})
    
const CurrentChart=new mongoose.model("CurrentChart",CurrentChartSchema);
module.exports=CurrentChart;