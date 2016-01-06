var formulaController = require('./formulaController.js');

module.exports = function (app) {
  app.get('/:id', formulaController.getFormula);
}