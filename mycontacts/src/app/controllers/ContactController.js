const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List all registers
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Get register
  }

  store() {
    // Create new register
  }

  update() {
    // Edit register
  }

  delete() {
    // Delete register
  }
}

// Singleton
module.exports = new ContactController();
