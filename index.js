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
const fs=require("fs")
 fs.rename("pro.txt",(err)=>{
    if(err) throw err;
     console.log("file Renamed!!")
})





