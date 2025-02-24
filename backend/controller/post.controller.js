import postModel from "../models/post.model.js"

export const getposts= async (req,res)=>{
    const posts=await postModel.find()
    res.status(200).json(posts)
}
export const getpost= async (req,res)=>{
    const posts=await postModel.findOne({slug:req.params.slug})
    res.status(200).json(posts)
}
export const creatpost= async (req,res)=>{
    const newpost=new postModel(req.body)
        const post=await newpost.save()
        res.status(200).json(post)
    
    
}
export const deletepost= async (req,res)=>{
   
        const post=await postModel.findByIdAndDelete(req.params.id)
        res.status(200).json("you destroy the post /")
    
    
}