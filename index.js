const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table("allConracts:", allContacts);
      return allContacts;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log("oneContact:", oneContact);
      return oneContact;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("newContact:", newContact);
      return newContact;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log("deleteContact:", deleteContact);
      return deleteContact;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
