// Appel du module mongoose

const mongoose = require("mongoose");

// Création d'un schema d'objet

const thingsSchema = mongoose.Schema({
    userId: { type: String },
    name: { type: String },
    manufacturer: { type: String },
    description: { type: String },
    mainPepper: { type: String },
    imageUrl: { type: String },
    heat: { type: Number },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },

})

// Export du schema d'objet Things pour app.js

module.exports = mongoose.model("Thing", thingsSchema);