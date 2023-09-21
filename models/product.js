const mongoose =require("mongoose");


const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:[true,"Price must be Enter"]
        },
        features:{
            type:Boolean,
            required:false,
        },
        rating:{
            type:Number,
            default:4.9,
        },
        createAt:{
            type:Date,
            default:Date.now(),
        },
        company:{
            type:String,
            enum:{
                values:["apple","mi","redmi"],
                message:`{values} is not Supported`
            }
        }
    }
)


module.exports =mongoose.model("Product",productSchema);