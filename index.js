//==========================================MODULE=================================================================
const http=require("http");
http.createServer((req,res)=>{
    res.write("<h1> i am shivani</h1>")
    res.end()
}).listen(4000)

// const http=require("http");
// const myMdl=require("myMdl")
// http.createServer((req,res)=>{
//     res.write("<h1> i am shivani</h1>")
//     res.write()
//     res.end()
// }).listen(4000)