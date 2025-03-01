import express, { json } from "express";
import router from "./routes/user.routes.js";
import postrouter from "./routes/post.routes.js";
import commentrouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";
//import webhookrouter from "./routes/webhook.routes.js";
import webhookRouter from "./routes/webhook.routes.js";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use("/webhooks", webhookRouter);
app.use(express.json())
app.use(clerkMiddleware())
app.get('/auth-state',(req,res)=>{
    const authState=req.auth;
    res.json(authState)
})
app.get('/protected',(req,res)=>{
    const {userId}=req.auth
    if(!userId){
        return res.status(401).json("not auth")
    }
    res.status(200).json('all don')
})

app.use('/user',router)  
app.use('/post',postrouter)
app.use('/comment',commentrouter)

app.get('/', (req, res) => {
    res.json({ message: "Hello, Express is working!" });
});

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