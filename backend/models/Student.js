const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let studentSchema = new Schema({
    name: {
        type: String
    },
    regisno: {
        type: Number
    },
    schoolof: {
        type: String
    },
    major: {
        type: String
    },
    advisor: {
        type: String
    },
    address: {
        type: String
    },
    phonenumber: {
        type: Number
    },
    email: {
        type: String
    },
    requestfor: {
        type: String
    }

}, {
    collection: "students"
})

module.exports = mongoose.model('Student', studentSchema);