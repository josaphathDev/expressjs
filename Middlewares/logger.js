// logger.js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Passe au middleware ou à la route suivante
  };
  
  module.exports = logger;
  