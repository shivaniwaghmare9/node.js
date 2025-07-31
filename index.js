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

// const http=require("http")
// const fs=require("fs");
// http.createServer((req,res)=>{
//     fs.readFile("shiv.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end();
//     })
// }).listen(7000)

//=====================================FILE SYSTEM MODULE(APPEND- NYII FILE CREATE KRNA APPEND KA USE KRKE)=================================================
// isme nyii file create ho jayegi nhii hai to agr hai to usme data append(add) ho jayega our ydii file me dusra data dala to vo data side me append ho jayega

// const fs=require("fs");
// fs.appendFile("ram.txt", " hii am shivani",(err)=>{
//     if(err) throw err;
//     console.log("file created!!")
// })          
             
//==============DATA ME CHNAGE===========================
// const fs=require("fs");
// fs.appendFile("ram.txt", " I AM FROM BETUL",(err)=>{
//     if(err) throw err;
//     console.log("file created!!")
// })


 //===========================================FILE SYSTEM MODULE(OPEN-isse bhi nyii file create hoti h lekin file blank(khali) rhti h)============================================
 //isme file to create ho jati h lekin khali rhti h 

// const fs=require("fs")
//  fs.open("pro.pdf","w",(err,file)=>{
//     if(err) throw err;
//      console.log("file created")
// })

//===========================================FILE SYSTEM MODULE(WRITEFILE-isse bhi nyii file create hoti h lekin file blank(khali) rhti h)============================================
//isme file to create ho jati h or data aata lekin ydii data me change kiyaa to phle ka data dusre data se replace ho jata== 

// const fs=require("fs")
//  fs.writeFile("proj.txt","hii mern stack developer",(err)=>{
//     if(err) throw err;
//      console.log("file created")
// })

// //========================DATA CHANGE===================
// const fs=require("fs")
//  fs.writeFile("proj.txt","i am software developer",(err)=>{
//     if(err) throw err;
//      console.log("file created")
// })


// //==========================================FILE DELETED(unlink-ka use)============================================================================
// const fs=require("fs")
//  fs.unlink("projj.txt",(err)=>{
//     if(err) throw err;
//      console.log("file deleted")
// })


//==========================================FILE RENAME(rename-ka use)============================================================================
// const fs=require("fs")
//  fs.rename("pro.pdf" ,"red.txt",(err)=>{
//     if(err) throw err;
//      console.log("file Renamed!!")
// })


//===============================================EXPRESS STATRT HERE=================================================================


// const express=require("express")
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("<h1>Hello this is my  page</h1>")
// })
// app.get("/home",(req,res)=>{
//     res.send("<h1>Hello this is my home page</h1>")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>Hello this is my about page</h1>")
// })
// app.get("/service",(req,res)=>{
//     res.send("<h1>Hello this is my service page</h1>")
// })

// app.listen(3000,()=>{
//     console.log("server running on port 3000")
// })


//===================================================ROUTES=============================================================

// const express=require("express");
// const app=express();
// const stuRoute=require("./routes/stuRoutes");
// const teaRoute=require("./routes/teaRoutes");
// app.use("/students",stuRoute)
// app.use("/teachers",teaRoute)

// app.listen(4000,()=>{
//    console.log("server runinig on port 4000!!")
// })

//===========================================================USING CONTROLLER====================================================

// const express=require("express");
// const app=express();
// const empRoute=require("./routemvc/empRoute");
// app.use("/employee",empRoute);



// app.listen(5000,()=>{
//    console.log("server is running on port 5000!!!")
// })
//===========================================================USING VIEW ENGINE USE====================================================

const express=require("express")
const app=express();
const routeEjs=require("./routemvc/RouteEjs");
app.set("view engine","ejs")
app.use("/",routeEjs)


app.listen(3000,()=>{
   console.log("server is running on port 3000")
})

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

// const http=require("http")
// const fs=require("fs");
// http.createServer((req,res)=>{
//     fs.readFile("shiv.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end();
//     })
// }).listen(7000)

//=====================================FILE SYSTEM MODULE(APPEND- NYII FILE CREATE KRNA APPEND KA USE KRKE)=================================================
// isme nyii file create ho jayegi nhii hai to agr hai to usme data append(add) ho jayega our ydii file me dusra data dala to vo data side me append ho jayega

// const fs=require("fs");
// fs.appendFile("ram.txt", " hii am shivani",(err)=>{
//     if(err) throw err;
//     console.log("file created!!")
// })          
             
//==============DATA ME CHNAGE===========================
// const fs=require("fs");
// fs.appendFile("ram.txt", " I AM FROM BETUL",(err)=>{
//     if(err) throw err;
//     console.log("file created!!")
// })


 //===========================================FILE SYSTEM MODULE(OPEN-isse bhi nyii file create hoti h lekin file blank(khali) rhti h)============================================
 //isme file to create ho jati h lekin khali rhti h 

// const fs=require("fs")
//  fs.open("pro.pdf","w",(err,file)=>{
//     if(err) throw err;
//      console.log("file created")
// })

//===========================================FILE SYSTEM MODULE(WRITEFILE-isse bhi nyii file create hoti h lekin file blank(khali) rhti h)============================================
//isme file to create ho jati h or data aata lekin ydii data me change kiyaa to phle ka data dusre data se replace ho jata== 

// const fs=require("fs")
//  fs.writeFile("proj.txt","hii mern stack developer",(err)=>{
//     if(err) throw err;
//      console.log("file created")
// })

// //========================DATA CHANGE===================
// const fs=require("fs")
//  fs.writeFile("proj.txt","i am software developer",(err)=>{
//     if(err) throw err;
//      console.log("file created")
// })


// //==========================================FILE DELETED(unlink-ka use)============================================================================
// const fs=require("fs")
//  fs.unlink("projj.txt",(err)=>{
//     if(err) throw err;
//      console.log("file deleted")
// })


//==========================================FILE RENAME(rename-ka use)============================================================================
// const fs=require("fs")
//  fs.rename("pro.pdf" ,"red.txt",(err)=>{
//     if(err) throw err;
//      console.log("file Renamed!!")
// })


//===============================================EXPRESS STATRT HERE=================================================================


// const express=require("express")
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("<h1>Hello this is my  page</h1>")
// })
// app.get("/home",(req,res)=>{
//     res.send("<h1>Hello this is my home page</h1>")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>Hello this is my about page</h1>")
// })
// app.get("/service",(req,res)=>{
//     res.send("<h1>Hello this is my service page</h1>")
// })

// app.listen(3000,()=>{
//     console.log("server running on port 3000")
// })


//===================================================ROUTES=============================================================

// const express=require("express");
// const app=express();
// const stuRoute=require("./routes/stuRoutes");
// const teaRoute=require("./routes/teaRoutes");
// app.use("/students",stuRoute)
// app.use("/teachers",teaRoute)

// app.listen(4000,()=>{
//    console.log("server runinig on port 4000!!")
// })

//===========================================================USING CONTROLLER====================================================

// const express=require("express");
// const app=express();
// const empRoute=require("./routemvc/empRoute");
// app.use("/employee",empRoute);



// app.listen(5000,()=>{
//    console.log("server is running on port 5000!!!")
// })
//===========================================================USING VIEW ENGINE USE====================================================

const express=require("express")
const app=express();
const routeEjs=require("./routemvc/RouteEjs");
app.set("view engine","ejs")
app.use("/",routeEjs)


app.listen(3000,()=>{
   console.log("server is running on port 3000")
})