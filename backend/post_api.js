const express = require('express')
require('./db_connect');
const app = express();
const port = 3000;

app.get("/students", (req, resp) => {
    resp.send("hello");
});






app.listen(port, () => {
    console.log(`Local Server Working On  http://localhost:${port}`)
});