require("dotenv").config();
const express = require("express");
const formulario = require("./router/formulario");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use("/",formulario);

app.use((req,res,next)=>{
    res.status(404).render("404",{mensaje:"Esta página no está disponible", nombre:"404"});
})
app.listen(process.env.PORT);