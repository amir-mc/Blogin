import express from "express";
import { creatpost, deletepost, getpost, getposts  } from "../controller/post.controller.js";

const router=express.Router()
router.get ('/'  ,getposts) 
router.get ('/:slug'  ,getpost)  
router.post ('/'  ,creatpost)  
router.delete ('/:id'  ,deletepost)  


//req=request res=response 
export default router