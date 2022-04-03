const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    telefono: Number,
    pais: String,
    date: String
});

const user = mongoose.model("users",userSchema);

module.exports = user;