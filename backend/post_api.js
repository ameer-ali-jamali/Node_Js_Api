const express = require('express')
const app = express();
const port = 3000;

app.get("/students", (req, resp) => {
    resp.send("hello connected");
});






app.listen(port, () => {
    console.log(`Local Server Working On  http://localhost:${port}`)
});