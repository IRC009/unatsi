const express = require("express");
const router = express.Router();
const modelEncuesta = require("../models/modelEncuesta");

router.get("/",(req,res)=>{
    res.render("encuesta");
})

router.post("/enviar",async (req,res)=>{
    let body = req.body;
    //validación 
    if(body.opcion1 == true || body.opcion2 == true || body.opcion3 == true || body.opcion4 == true){

        const isIpExist = await modelEncuesta.findOne({ip : body.ip});//con esto valido el ip ya haya votado
        if(isIpExist){
            return res.status(400).json({
            error: 'IP ya registrado',
            mensaje:"Ya usted votó"
            });
        }
        //guardamos la encuesta
        try {
            const guardarEncuesta = new modelEncuesta(body);
            await guardarEncuesta.save();
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