const express = require('express');
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log("we got a new request");
//     // console.dir(req)
//     // res.send("Hi, we got your request! This is a response!!")
//     // res.send({ color: 'red'})
//     res.send("<h1>This is a WebPage!</h1>")
// })

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params)
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post id: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/fruits', (req, res) => {
    // console.log("request for fruits")
    res.send("<h1>Fruits Page</h1>")
})

app.post('/create', (req, res) => {
    res.send("post request to /create, this is different than a get request!")
})

app.get('/languages', (req, res) => {
    res.send("<h1>Languages Page</h1>")
})

app.get('/search', (req, res) => {
    // console.log(req.query)
    const { q } = req.query;
    if(!q) {
        res.send(`<h1>No query, no results.</h1>`)
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("<h1>I don't know that path</h1>")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})