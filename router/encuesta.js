const express = require("express");
const router = express.Router();
const modelEncuesta = require("../models/modelEncuesta");
const jwt = require("jsonwebtoken");

router.get("/",(req,res)=>{
    res.render("encuesta");
})

router.post("/enviar",async (req,res)=>{
    let body = req.body;
    //validación 
    if(body.opcion1 == true || body.opcion2 == true || body.opcion3 == true || body.opcion4 == true){

      //verificamos si hay un token
      
        const tokenValidate = req.cookies.TKenc; //miramos si existe el token
        if(tokenValidate){
            return  res.json({
                mensaje:"Usted ya votó"
            })
        }
    
        //guardamos la encuesta
        try {
            const guardarEncuesta = new modelEncuesta(body);
            await guardarEncuesta.save();
            const token = jwt.sign({
                data:"todo correcto"
            },process.env.TOKEN_ENCUESTA);

            res.cookie("TKenc",token,{httpOnly:true}); //ponemos el token en la Cookie

            res.json({
                mensaje:"Votación exitosa"
            })
            console.log(body);
        } catch (error) {
            console.log(error)
        }


    }
    else{
        return res.json({
            mensaje:"Selecione al menos una respuesta"
        })
    }
})

module.exports = router;