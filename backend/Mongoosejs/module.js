// Mongoose Connection into Mongodb Database
// Connection creation and cration a new database

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/std")
    .then(() => console.log("Connection Successfull......."))
    .catch((err) => console.log(err));


//  This is Schema
//  A Mongoose Schema defines the structure of the document,
//  Default values, validators, etc.,

const ProductsSchema = new mongoose.Schema({
    name: String,
    Brand: String,
    Price: String,
    Categroy: String
});


//  Now This is Model of Mongoose..
//  A Mongoose model is a wrapper on the Mongoose mongoose Schema.
//  A Mongoose schema defines the structure of the document default values, validators, etc.,
//  Whereas a Mongoose model provides an interface to the databae for creating,
//  querying, updating, deleting records, etc..

const Products = new mongoose.model("Products", ProductsSchema);