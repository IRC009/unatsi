const { Router } = require("express");
const express = require("express");
const router = express.Router();
const administracionModel = require("../models/administracion");

router.get("/", async (req,res)=>{
    try {
        const fecha = await administracionModel.findById("6280100d65623360310e2869");
        res.render("admin",{fecha});
    } catch (error) {
        console.log(error)
    }
    
});

router.post("/",async (req,res)=>{
    const preBody = req.body;
    const body = {
        fecha:preBody.fecha
    }
    try {
        if(preBody.contraseña != process.env.PASSWORD_ADMIN){
            return res.json({
                mensaje:"error"
            })
        }
        const guardar = await administracionModel.findByIdAndUpdate("6280100d65623360310e2869",body,{useFindAndModify : false});
        res.redirect("/admin")

    } catch (error) {
        console.log(error);
    }
});

router.get("/fechaproximaclase", async (req,res)=>{
   const data = await administracionModel.findById("6280100d65623360310e2869");
   res.json({
       fecha : data.fecha
   });
})

module.exports = router;