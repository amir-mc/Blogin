import { Schema } from "mongoose";
import mongoose from "mongoose";
//dar jahat sakht data base va tamam fild ha ye majmoe 
const commentScema= new Schema(
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
        post:{
            type:Schema.Type.ObjectId,
            ref:"Post",
            required:true
        }

        desc:{
            type:String,
            required:true
        },
    },{timestamps:true})
    export default mongoose.model("comment",commentScema)