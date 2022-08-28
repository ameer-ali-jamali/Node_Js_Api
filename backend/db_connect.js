const mongoose = require("mongoose");
const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/local-data")
    .then(() => console.log("Connected Successfully....."))
    .catch((err) => console.log(err));


const studentsSchema = new mongoose.Schema({
    name: String,
    Brand: String,
    Price: String,
    Categroy: String
});

