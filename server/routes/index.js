// Require your controllers here
const ContactController = require("../controllers/contact");


module.exports = (app) => {
  // Add your routes here

  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });
    
  app.post('/contacts', ContactController.create);
  app.get('/contacts/list', ContactController.listContacts);
  app.get('/contact/:id', ContactController.getContact);
  app.put('/contact/:id', ContactController.updateContact);
  app.delete('/contact/:id', ContactController.delete);

};
