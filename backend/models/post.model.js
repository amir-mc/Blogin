import { Schema } from "mongoose";
import mongoose from "mongoose";
//dar jahat sakht data base va tamam fild ha ye majmoe 
const postScema= new Schema(
    {   
        // esm fild :{
        //     noe fild :String,
        //     required:ejbari ,
        //     unique:khas 
        // }
        user:{
            type:Schema.Type.ObjectId,
            ref:"User",
            required:true
        },

        img:{
            type:String,
           
        },
        title:{
            type:String,
            required:true,
            
        },
        slug:{
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
         
        },
        contant:{
            type:String,
            required:true,
         
        },
        isFeatured:{
            type:Boolean,
            default:false
        },
        visit:{
            type:Number,
            default:0 
        }
    },{timestamps:true})
    export default mongoose.model("Post",postScema)