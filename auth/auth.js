const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
    console.log(message); // Log pour débogage
    return res.status(401).json({ message });
  }
  
  const token = authorizationHeader.split(' ')[1];
  console.log('Token reçu:', token); // Log pour débogage

  jwt.verify(token, privateKey, (error, decodedToken) => {
    if (error) {
      const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource.`;
      console.log(message, error); // Log pour débogage
      return res.status(401).json({ message, data: error });
    }

    console.log('Token décodé:', decodedToken); // Log pour débogage
    req.userId = decodedToken.userId;
    next();
  });
};
