import { response } from "express"
import postModel from "../models/post.model.js"
import userModel from "../models/user.model.js"

export const getposts= async (req,res)=>{
    const posts=await postModel.find()
    res.status(200).json(posts)
}
export const getpost= async (req,res)=>{
    const posts=await postModel.findOne({slug:req.params.slug})
    res.status(200).json(posts)
}
export const creatpost= async (req,res)=>{
    const clerkuserId=req.auth.userId
    if(!clerkuserId){
        return res.status(401).json('not auth')
        
    }
    const user=userModel.findOne({userId})
        if(!user){
            return res.status(404).json('ERROR IN SENDING ')
        }
    const newpost=new postModel({user:user._id , ...req.body})
        const post=await newpost.save()
        res.status(200).json(post)
    
    
}
export const deletepost= async (req,res)=>{
   
        const post=await postModel.findByIdAndDelete(req.params.id)
        res.status(200).json("you destroy the post /")
    
    
}