const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    telefono: Number
});

const user = mongoose.model("users",userSchema);

module.exports = user;