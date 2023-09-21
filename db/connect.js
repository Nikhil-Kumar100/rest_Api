const mongoose = require("mongoose");


 const connectDB = (uri)=>{
    console.log("DB Connect");
    return mongoose.connect(uri,{
      
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
 };

 module.exports = connectDB;