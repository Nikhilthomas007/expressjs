const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/fruits', (req, res, next) => {
    console.log("fruits here!");
    next();
})

// app.use((req, res, next) => {
//     const {password} = req.query;
//     if(password === "abc123") {
//         next();
//     }
//     res.send("SORRY YOU NEED A CORRECT PASSWORD TO ACCESS THIS ROUTE");
// })

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === "abc123") {
        next();
    }
    res.send("SORRY YOU NEED A CORRECT PASSWORD TO ACCESS THIS ROUTE");
}

// app.use((req, res, next) => {
//     console.log("This is my first middleware!")
//     // next();
//     return next();
//     console.log("This is my first middleware - after calling next()")
// })
// app.use((req, res, next) => {
//     console.log("This is my second middleware!")
//     next();
// })

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send("<h1>Home Page</h1>")
})

app.get('/fruits', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send("<h1>Fruits List</h1>")
})

app.get('/proute', verifyPassword ,(req, res) => {
    res.send("<h1>This is a protected route</h1>")
})

app.use((req, res) => {
    res.status(404).send("<h1>NOT FOUND!</h1>")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})