import express, { json } from "express";
import router from "./routes/user.routes.js";
import postrouter from "./routes/post.routes.js";
import commentrouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";

const app = express();
app.use(express.json())

// app.get("/test", (req, res) => {
//     res.status(200).send("It isdd working");
// });
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

app.listen(3000, () => {
    connectDB()
    console.log("Server running on port 3000");

});