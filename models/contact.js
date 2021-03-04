const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ContactSchema = new schema({
    First: {
        type: String
    },
    Last: {
        type: String
    },
    Phone: {
        type: String
    }
});
mongoose.model('Contact', ContactSchema);