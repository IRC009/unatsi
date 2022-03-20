const express = require("express");
const db = require("mongoose");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.odulz.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
const conectarDB = ()=>{
    db.connect(uri).then(()=>{ console.log("Base de datos conectada")})
    .catch((e)=>{ console.log(e) });
}

module.exports = conectarDB;