const mongoose = require("mongoose");
const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/std")
    .then(() => console.log("Connected Successfully....."))
    .catch((err) => console.log(err));


const studentsSchema = new mongoose.Schema({
    First_name: {
        type: String,
        require: true,
        minlength: 1,
        unique: true
    },
    Last_name: {
        type: String,
        require: true,
        minlength: 4
    },
    Email: {
        type: String,
        require: true,
        minlength: 4,
        unique: true
    },
    Password: {
        type: String,
        require: true,
        minlength: 8,
        unique: true
    },
    Phone_Number: {
        type: Number,
        min: 1,
        require: true,
        minlength: 8,
        unique: true
    },
    Adress: {
        type: String,
        require: true,
        minlength: 8,

    }

});

const students = new mongoose.model('Students', studentsSchema);
module.exports = students;
