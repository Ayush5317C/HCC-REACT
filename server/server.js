require('dotenv').config();
const express = require('express');
const app = express();
const connectToDB = require("./mongoDb/connect.js");

const PORT = process.env.PORT || 8000;

// connect to mongo db
connectToDB(process.env.MONGO_URI);

app.get("/", (req,res)=>{
    console.log("HELLO WORLD");
})
app.listen(PORT, ()=>{
    console.log(`Server running on the port ${PORT}`);
})