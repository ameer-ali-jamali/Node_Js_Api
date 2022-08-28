const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/local_data")
    .then(() => console.log("Connection Successfull......."))
    .catch((err) => console.log(err));

const ProductsSchema = new mongoose.Schema({
    name: String,
    Brand: String,
    Price: String,
    Categroy: String
});

const products = mongoose.model("products", ProductsSchema);

let SendDatadb = async () => {
    try {
        const reactProducts = new products({
            name: "Oppo A6",
            Brand: "A22021",
            Price: 10000,
            Categroy: "Android"
        })
        const result = await reactProducts.save()
        console.log(result)
    } catch (err) {
        console.log(err)
    }

};

SendDatadb();