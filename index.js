

const http=require("http");
http.createServer((req,res)=>{
    res.write("<h1> i am shivani</h1>")
    res.end()
}).listen(4000)