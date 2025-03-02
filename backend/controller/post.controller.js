import postModel from "../models/post.model.js"
import User from "../models/user.model.js";
export const getposts= async (req,res)=>{
    const posts=await postModel.find()
    res.status(200).json(posts)
}
export const getpost= async (req,res)=>{
    const posts=await postModel.findOne({slug:req.params.slug})
    res.status(200).json(posts)
}
export const creatpost= async (req,res)=>{
    const clerkUserId = req.auth.userId;

  console.log(req.headers);

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json("User not found!");
  }
  
    const newpost=new postModel({user:user._id, ...req.body})
        const post=await newpost.save()
        res.status(200).json(post)
    
    
}
export const deletepost= async (req,res)=>{
   
        const post=await postModel.findByIdAndDelete({    _id: req.params.id,
            user: user._id,})
        res.status(200).json("you destroy the post /")
    
    
}