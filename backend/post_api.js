const express = require('express');
const mongoose = require("mongoose");
const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/Students_Data")
    .then(() => console.log("Connected Successfully....."))
    .catch((err) => console.log(err));
///
const port = 3000;
const app = express();
app.use(express.json());

const User_dataSchema = new mongoose.Schema({
    name: String,
    password: String
    // First_name: {
    //     type: String,
    //     require: true,
    //     unique: true
    // },
    // Last_name: {
    //     type: String,
    //     require: true,

    // },
    // Email: {
    //     type: String,
    //     require: true,
    //     unique: true
    // },
    // Password: {
    //     type: String,
    //     require: true,
    //     unique: true
    // },
    // Address: {
    //     type: String,
    //     require: true

    // }

});

const Students = mongoose.model('Aptech_Srudents', User_dataSchema);

app.post("/user", async (req, resp) => {
    const result = await new Students(req.body);
    result.save()
        .then(() => {
            resp.send({ Result: "Data Submited" })
        }).catch((err) => {
            console.log(err)
        });
    console.log(result);
});


app.listen(port, () => {
    console.log(`Local Server Working On  http://localhost:${port}`)
});