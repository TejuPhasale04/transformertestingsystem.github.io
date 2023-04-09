const mongoose=require("mongoose");
const connection=require("./Connection");
const TestSchema=new mongoose.Schema({
    Test1:{
        type:String
    },
    Test2:{
         type:String
    },
    Test3:{
        type:String
    }
})

const TestSelection=new mongoose.model("Tests",TestSchema);
module.exports=TestSelection;
