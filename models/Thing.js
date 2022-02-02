// Appel du module mongoose

const mongoose = require("mongoose");

// Création d'un schema d'objet

const thingsSchema = mongoose.Schema({
    sauce: { type: String, required: true },
    image: { type: String, required: true },
})

// Export du schema d'objet Things pour app.js

module.exports = mongoose.model("Thing", thingsSchema);