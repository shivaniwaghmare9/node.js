//==========================================MODULE=================================================================
// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("<h1> i am shivani</h1>")
//     res.end()
// }).listen(4000)

//==========================================MODULE(KHUD KA BNAYA MODULE-CYBROM)=======================================================================
// const http=require("http");
// const myMdl=require("./cybrom")
// http.createServer((req,res)=>{
//     res.write("<h1> i am shivani</h1>")
//     res.write(myMdl.myName());
//     res.write(myMdl.myClass());
//     res.end("<h2>thank you for visiting</h2>")
// }).listen(5000)

//=========================================FILE SYSTEM MODULE(SHIV.TXT BNAYI FILE SARA ka DATA AA JAYEGA)================================================

const http=require("http")
const fs=require("fs");
http.createServer((req,res)=>{
    fs.readFile("shiv.txt",(err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();
    })
}).listen(7000)




