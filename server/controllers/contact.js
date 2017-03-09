const Contact = require("../models").Contact;

module.exports = {

 create (req, res) {
   Contact.create({
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     phone: req.body.phone,
     city: req.body.city,
     state: req.body.city,
     photo_url: req.body.photo_url,
     email: req.body.email
   })
      .then(contact => res.status(201).send(contact))
      .catch(error => res.status(400).send(error));
 },

 getContact (req, res) {
   Contact.findById(req.params.id)
     .then(contact => res.status(200).send(contact))
     .catch(error => res.status(400).send(error));
 },

  delete (req, res) {
    Contact.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(res.status(200).send())
      .catch(error => res.status(400).send(error));
  },

  listContacts (req, res) {
    Contact.findAll()
      .then(contacts => res.status(200).send(contacts))
      .catch(error => res.status(400).send(error));
  }
};
