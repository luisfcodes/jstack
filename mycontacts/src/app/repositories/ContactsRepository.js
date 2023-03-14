const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Luis Fernando',
    email: 'luis@gmail.com',
    phone: '123456789',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
