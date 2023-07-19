const express = require('express');
const app = express();
// console.dir(app);

app.use((req, res) => {
    console.log("we got a new request");
    // console.dir(req)
    // res.send("Hi, we got your request! This is a response!!")
    // res.send({ color: 'red'})
    res.send("<h1>This is a WebPage!</h1>")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})