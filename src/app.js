const express=require("express");
const hbs=require("hbs");
const path=require("path");
const app=express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const homeRouter=require('./Routers/Home');
const testRouter=require('./Routers/Test');
const BOMRouter=require('./Routers/BOM');
const CurrentChartRouter=require('./Routers/CurrentChart');
const EquipmentRatingRouter=require('./Routers/EquipmentRating');
const loginRouter=require('./Routers/login');
const SignUpRouter=require('./Routers/SignUp');
const logout=require('./Routers/logout');
const adminrouter=require('./Routers/admin');
const BillOfMaterialRouter=require('./Routers/BillOfMaterial')
const userRouter = require('./Routers/ManageUser');



app.use('', userRouter);
app.use('',homeRouter);
app.use('',testRouter);
app.use('',BOMRouter);
app.use('',CurrentChartRouter);
app.use('',EquipmentRatingRouter);
app.use('',loginRouter);
app.use('',SignUpRouter);
app.use('',logout);
app.use('',BOMRouter);
app.use('',adminrouter);
app.use('',BillOfMaterialRouter)
//static/css/style.css
app.use('/static',express.static("public"));

app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials(__dirname,'views/partials');
    
app.listen(3000,()=>{
    console.log("Server Started...");
});



