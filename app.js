const express = require('express');
require("dotenv").config();
const app=express();
const products_routes=require("./Routes/products")
const connectDB = require("./db/connect");
const PORT= process.env.PORT||5100;
// app.get("/",(req,res)=>{
//     console.warn("App Start");
//     res.send("app are working.....")
// });

app.use("/api/product",products_routes);

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,()=>{
            console.log(`${PORT} Server Are Start `);
        });
    } catch (error) {
        console.log(error);
        
    }
}
start();