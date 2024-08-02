const jwt = require('jsonwebtoken');
const privateKey = require('./private_key'); // Vérifiez le chemin du fichier

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
    return res.status(401).json({ message });
  }

  const token = authorizationHeader.split(' ')[1];
  console.log('Token reçu :', token);

  jwt.verify(token, privateKey, (error, decodedToken) => {
    if (error) {
      console.error('Erreur lors de la vérification du token :', error);
      const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`;
      return res.status(401).json({ message, data: error });
    }

    console.log('Token décodé :', decodedToken);

    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      const message = `L'identifiant de l'utilisateur est invalide.`;
      return res.status(401).json({ message });
    } else {
      next();
    }
  });
};
