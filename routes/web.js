const express = require("express");
const ContactsController = require("../controllers/ContactsController");
const router = express.Router();

router.get("/", ContactsController.getHomePage);

router.get("/Add_Contact", ContactsController,GetAddContactPage);d

router.get("/delete", ContactsController, DeleteContact);

router.get("/Add_Contact", ContactsController, NewContact);

module.exports = router;
