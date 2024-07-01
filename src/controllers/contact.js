import { Contact } from "../models/contact.model.js";
const createContact = async (req, res) => {
    try {
      const newContact = new Contact(req.body);
      const savedContact = await newContact.save();
      res.status(201).json(savedContact);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  export {createContact}