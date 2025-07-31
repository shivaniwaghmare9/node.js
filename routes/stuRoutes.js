
// const express=require("express");
// const route=express.Router();

// route.get("/name",(req,res)=>{
//     res.send("<h1>hii this is my name page</h1>")
// })
// route.get("/rollno",(req,res)=>{
//     res.send("<h1>hii this is my rollno page</h1>")
// })
// route.get("/subject",(req,res)=>{
//     res.send("<h1>hii this is my subject page</h1>")
// })
// route.get("/fees",(req,res)=>{
//     res.send("<h1>hii this is my fees page</h1>")
// })
// module.exports=route;

const express=require("express");
const route=express.Router();

route.get("/name",(req,res)=>{
    res.send("<h1>hii this is my name page</h1>")
})
route.get("/rollno",(req,res)=>{
    res.send("<h1>hii this is my rollno page</h1>")
})
route.get("/subject",(req,res)=>{
    res.send("<h1>hii this is my subject page</h1>")
})
route.get("/fees",(req,res)=>{
    res.send("<h1>hii this is my fees page</h1>")
})
module.exports=route;
