// Mongoose Connection into Mongodb Database
// Connection creation and cration a new database

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/local_data")
//     .then(() => console.log("Connection Successfull......."))
//     .catch((err) => console.log(err));


//  This is Schema
//  A Mongoose Schema defines the structure of the document,
//  Default values, validators, etc.,

// const ProductsSchema = new mongoose.Schema({
//     name: String,
//     Brand: String,
//     Price: String,
//     Categroy: String
// });


//  Now This is Model of Mongoose..
//  A Mongoose model is a wrapper on the Mongoose mongoose Schema.
//  A Mongoose schema defines the structure of the document default values, validators, etc.,
//  Whereas a Mongoose model provides an interface to the databae for creating,
//  querying, updating, deleting records, etc..


// Collection Created of database tables or json format
// const products = mongoose.model("products", ProductsSchema);
// const new_data1 = mongoose.model("new_data1", ProductsSchema);



// //  First Simple methhod
// ////////////////////
// // Create document or insert data into database

// const reactProducts = new products({
//     name: "Oppo A6",
//     Brand: "A22021",
//     Price: 10000,
//     Categroy: "Android"
// });

// const reactNew_data1 = new new_data1({
//     name: "Oppo A6",
//     Brand: "A22021",
//     Price: 10000,
//     Categroy: "Android"
// });

// reactProducts.save();
// reactNew_data1.save();
// ///////////////////


// 2nd Method Latest
///////////////////

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/local_data")
//     .then(() => console.log("Connection Successfull......."))
//     .catch((err) => console.log(err));

// const ProductsSchema = new mongoose.Schema({
//     name: String,
//     Brand: String,
//     Price: String,
//     Categroy: String
// });

// const products = mongoose.model("products", ProductsSchema);

// let SendDatadb = async () => {
//     try {
//         const reactProducts = new products({
//             name: "Oppo A6",
//             Brand: "A22021",
//             Price: 10000,
//             Categroy: "Android"
//         })
//         const result = await reactProducts.save()
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }

// };

// SendDatadb();