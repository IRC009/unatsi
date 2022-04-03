const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("aprobado");
    console.log(req.user)
});

module.exports = router;