
const express=require("express");
const route=express.Router();

route.get("/name",(req,res)=>{
    res.send("<h1>hii this is my name page</h1>")
})
route.get("/post",(req,res)=>{
    res.send("<h1>hii this is my post page</h1>")
})
route.get("/subject",(req,res)=>{
    res.send("<h1>hii this is my subject page</h1>")
})
route.get("/salary",(req,res)=>{
    res.send("<h1>hii this is my salary page</h1>")
})
module.exports=route;
