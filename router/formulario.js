const express = require("express");
const conectarDB = require("./db");
const user = require("../models/users");
const validar = require("./validacionDB");
const router = express.Router();

conectarDB();

router.get("/",(req,res)=>{
    res.render("index");
});
router.get("/registro-exitoso",(req,res)=>{
    res.render("aprobado");
});

router.post("/",async (req,res)=>{
    const body = req.body;
    const userRegistrado = await user.find();

    validar(body,res,userRegistrado);
})

module.exports = router;