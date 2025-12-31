// password 95xjXJ85og58yh7H
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);

mongoose.connect("mongodb+srv://sachin13:95xjXJ85og58yh7H@cluster0.2qdiv.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));




