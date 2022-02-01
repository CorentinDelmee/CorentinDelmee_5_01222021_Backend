// Appel du module Express

const express = require('express');

// Appel du module mongoose

const mongoose = require("mongoose");

// Connexion mongoose Database

mongoose.connect('mongodb+srv://DefaultUser:MS64dLr6WqetV2a7@cluster0.bdfdk.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Appel du router user

const userRoutes = require('./routes/user');

// Initialisation de l'app

const app = express();
app.use(express.json());

// Header CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Utilisation de app.use des routes user

app.use('/api/auth', userRoutes);

// Export de l'app pour server.js

module.exports = app;