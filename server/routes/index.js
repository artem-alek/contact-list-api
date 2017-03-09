// Require your controllers here
const ContactController = require("../controllers/contact");


module.exports = (app) => {
  // Add your routes here
  app.post('/contacts', ContactController.create);
  app.get('/contacts/list', ContactController.listContacts);
  app.get('/contact/:id', ContactController.getContact);
  app.delete('/contact/:id', ContactController.delete);

};
