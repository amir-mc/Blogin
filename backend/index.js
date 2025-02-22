import express from "express";
import router from "./routes/user.routes.js";

const app = express();

// app.get("/test", (req, res) => {
//     res.status(200).send("It isdd working");
// });
app.use('/usser',router)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});