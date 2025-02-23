import express from "express";
import router from "./routes/user.routes.js";
import postrouter from "./routes/post.routes.js";
import commentrouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";

const app = express();

// app.get("/test", (req, res) => {
//     res.status(200).send("It isdd working");
// });
app.use('/user',router)
app.use('/post',postrouter)
app.use('/comment',commentrouter)

app.listen(3000, () => {
    connectDB()
    console.log("Server running on port 3000");

});