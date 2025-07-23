
const express=require("express");
const route=express.Router();
const controllerEjs=require("../controller/controllerEjs")
route.get("/",controllerEjs.homepage)
route.get("/about",controllerEjs.aboutpage)

module.exports=route