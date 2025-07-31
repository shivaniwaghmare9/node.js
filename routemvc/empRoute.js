
// const express=require("express");
// const route=express.Router();
// const empController=require("../controller/empDatacontrol");
// route.get("/name",empController.namepage)
// route.get("/city",empController.citypage)
// route.get("/post",empController.postpage)
// route.get("/salary",empController.salarypage)

// module.exports=route;


const express=require("express");
const route=express.Router();
const empController=require("../controller/empDatacontrol");
route.get("/name",empController.namepage)
route.get("/city",empController.citypage)
route.get("/post",empController.postpage)
route.get("/salary",empController.salarypage)

module.exports=route;