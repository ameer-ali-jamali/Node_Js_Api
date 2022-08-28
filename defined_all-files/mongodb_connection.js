// const express = require('express')
// const { MongoClient, MongoServerClosedError } = require('mongodb')
// const database = 'std'
// const url = "mongodb://Localhost:27017";
// const client = new MongoClient(url);
// const app = express();
// const port = 3000;
// app.use(express.json());


// async function getdata() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('Products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// };



// app.listen(port, () => {
//     console.log(`Local Server Working On  http://localhost:${port}`)
// });