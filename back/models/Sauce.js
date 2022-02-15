// Appel du module mongoose

const mongoose = require("mongoose");

// Création d'un schema d'objet

const saucesSchema = mongoose.Schema({
    userId: { type: String , required: true},
    name: { type: String, required: true},
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    usersDisliked: { type: [String], required: true },

})

// Export du schema d'objet Things pour app.js

module.exports = mongoose.model("Thing", saucesSchema);