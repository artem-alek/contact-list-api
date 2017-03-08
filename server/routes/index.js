// Require your controllers here
const ContactController = require("../controllers/contact");


module.exports = (app) => {
  // Add your routes here
  app.post('/contacts',ContactController.create);
};
