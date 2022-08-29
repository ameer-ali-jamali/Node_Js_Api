const express = require('express');
const { Double } = require('mongodb');
const mongoose = require("mongoose");
const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/Students_Data")
    .then(() => console.log("Mongodb Database Connected Successfully....."))
    .catch((err) => console.log(err));
///
const port = 3000;
const app = express();
app.use(express.json());

const User_dataSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    phone: Number,
    address: String

});

const date_ob = new Date();
date = ("0" + date_ob.getDate()).slice(-2);
month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
year = date_ob.getFullYear();
hours = date_ob.getHours();
minutes = date_ob.getMinutes();
seconds = date_ob.getSeconds();

const user_input_data_model = mongoose.model('Aptech_Students', User_dataSchema);
app.post("/user", async (req, resp) => {
    const result = await new user_input_data_model(req.body);
    result.save()
        .then(() => {
            resp.send(` Result : Your Data Submited Successfully
           Currunt Date : ${date}/${month}/${year} ${hours}:${minutes}:${seconds}
            ${result}
           `);
        }).catch((err) => {
            console.log(err)
            resp.send(`There is some error please solve error and try again
            ${date}/${month}/${year} ${hours}:${minutes}:${seconds} 
             ${err}`)

        })
    console.log(`${result} 
    ${date}/${month}/${year} ${hours}:${minutes}:${seconds}`);
});


app.listen(port, () => {
    console.log(`Local Server Working On  http://localhost:${port}`)
});
