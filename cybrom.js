
// const myName=()=>{
//     return "this is our node class"
// }
// const myClass=()=>{
//     return " i am mern fs developer"
// }

// module.exports={
//     myName,
//     myClass
// }

//==========================================================USE HTML TAG(H1)=================================================================
// const myName=()=>{
//     return "<h1>this is our node class</h1>"
// }
// const myClass=()=>{
//     return "<h1> i am mern fs developer</h1>"
// }

// module.exports={
//     myName,
//     myClass
// }

//===============================================EXPRESS STATRT HERE=================================================================

const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello this is my home page</h1>")
})



app.listen(3000,()=>{
    console.log("server running on port 3000")
})
