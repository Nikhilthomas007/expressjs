const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get('/fruits', (req, res) => {
    res.send("<h1>Fruits List</h1>")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})