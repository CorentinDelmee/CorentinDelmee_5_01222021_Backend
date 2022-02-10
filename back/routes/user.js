// Appel du module Express
const express = require("express");

// Appel de la fonction Router de express
const router = express.Router();

// Appel de User Controller 
const userCtrl = require("../controllers/user");

// Routes post inscription
router.post("/signup", userCtrl.signup);

// Routes post connexion
router.post("/login", userCtrl.login);

// Export du router pour user.js

module.exports = router;