import { Schema } from "mongoose";
import mongoose from "mongoose";
//dar jahat sakht data base va tamam fild ha ye majmoe 
const userScema= new Schema(
    {   
        // esm fild :{
        //     noe fild :String,
        //     required:ejbari ,
        //     unique:khas 
        // }

        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        img:{
            type:String,
        },
        savepost:{
            type:[String],
            default:[]
        }
    },{timestamps:true})
    export default mongoose.model("User",userScema)