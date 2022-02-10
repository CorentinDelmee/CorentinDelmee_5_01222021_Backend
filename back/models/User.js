//Appel du module mongoose

const mongoose = require("mongoose");

// Appel du plugin Mongoose unique validator

const uniqueValidator = require("mongoose-unique-validator")

// Création du schéma User

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true }
});

//Application du plugin unique validator avant de créer un model à partir de userSchema

userSchema.plugin(uniqueValidator);

// Export du schéma User

module.exports = mongoose.model("User", userSchema);