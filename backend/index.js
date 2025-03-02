import express, { json } from "express";
import router from "./routes/user.routes.js";
import postrouter from "./routes/post.routes.js";
import commentrouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";
//import webhookrouter from "./routes/webhook.routes.js";
import webhookRouter from "./routes/webhook.routes.js";
import dotenv from 'dotenv'
import { clerkMiddleware } from '@clerk/express'
import cors from "cors" 
//require('dotenv').config()
dotenv.config()
const app = express();
app.use(clerkMiddleware())
app.use(cors(process.env.AUTH_CLIENT_URL))
app.use('/webhooks', webhookRouter);

app.use(express.json())
app.use('/user',router) 
app.use('/post',postrouter)
app.use('/comment',commentrouter)   
app.get('/auth',(req,res)=>{
    const auther=req.auth
    res.json(auther)
})
app.get('/',(req,res)=>{
    const javad=process.env.test
    res.json(`javad123 ${javad}`)
})
app.get('/auth',(req,res)=>{
    const authoi=req.auth
    res.json(authoi)
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        message:error.message || "something wrong",
        status:error.status,
        stack:error.stack
    })
})

app.listen(3000, () => {
    connectDB()
    console.log("Server running on port 3000");

});