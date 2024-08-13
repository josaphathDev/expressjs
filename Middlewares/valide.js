// validateData.js
const validateData = (req, res, next) => {
    if (!req.body.name) {
      res.status(400).send('Le nom est requis');
    } else {
      next();
    }
  };
  
  module.exports = validateData;
  