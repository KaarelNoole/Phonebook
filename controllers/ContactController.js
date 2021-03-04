const mongoose = require("mongoose");
const contact = mongoose.model("contact");

exports.getHomePage = (req, res) =>{

    contact.find((error, contacts) => {
        if (!error) {
            res.render("index.ejs", {ContactItems: contacts});
        }
        else{
            console.log("Failed to retrieve data");
        }
    });
};

exports.NewContact = (req, res) => {
    let First = req.body.NewFirst;
    let Last = req.body.NewLast;
    let Phone = req.body.NewPhone;

    let Contact = new contact();
    Contact.firstname = First;
    Contact.lastname = Last;
    Contact.phonenumber = Phone;

    Contact.save((error, response)=>{
        if (!error) {
            res.redirect("/");
        }
        else{
            console.log("Failed to save");
        }
    })
}

exports.DeleteContact = (req, res) => {
    const ContactId = req.body.ContactDelete

    contact.findByIdAndDelete(ContactId, (error)=>{
        if (!error) {
            res.redirect("/")
        }else{
            console.log("Failed to remove item");
        }
    })
}

exports.GetAddContactPage = (req, res) => {

    contact.find((error, contacts) => {
        if (!error) {
            res.render("AddContact.ejs")
        }
        else{
            console.log("Failed to retrieve data");
        }
    });
}