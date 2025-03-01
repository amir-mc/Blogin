import { Schema } from "mongoose";
import mongoose from "mongoose";
//dar jahat sakht data base va tamam fild ha ye majmoe 

   // esm fild :{
        //     noe fild :String,
        //     required:ejbari ,
        //     unique:khas 
        // }
const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
    export default mongoose.model("comment",commentSchema)