
const express=require("express");
const route=express.Router();
const controllerEjs=require("../controller/controllerEjs")
route.get("/",controllerEjs.homepage)

module.exports=route