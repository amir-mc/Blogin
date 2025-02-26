import express, { json } from "express";
import router from "./routes/user.routes.js";
import postrouter from "./routes/post.routes.js";
import commentrouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";
//import webhookrouter from "./routes/webhook.routes.js";
import webhookRouter from "./routes/webhook.routes.js";

const app = express();
app.use('/webhooks', webhookRouter);
app.use(express.json())
app.use('/user',router) 
app.use('/post',postrouter)
app.use('/comment',commentrouter)   


app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        message:error.message || "something wrong",
        status:error.status,
        stack:error.stack
    })
})

app.listen(3000,'0.0.0.0', () => {
    connectDB()
    console.log("Server running on port 3000");

});