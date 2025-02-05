const express = require("express");
const app = express();

app.use((req,resp)=>{
    console.log("req",req);
    resp.send("Hello from Wahhaj!");
})

app.listen(4000,(req,resp)=>{
    console.log("Server is listening on port 4000");
})