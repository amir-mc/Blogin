import express from "express";

const app = express();

app.get("/test", (req, res) => {
    res.status(200).send("It isdd working");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});