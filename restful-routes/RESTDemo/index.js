const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/fruits", (req, res) => {
  res.send("GET /fruits request");
});

app.post("/fruits", (req, res) => {
  // console.log(req.body); //undefined
  // res.send("POST /fruits request");
  const { fruit, qty } = req.body;
  res.send(`Hi, here are your post request for ${qty} ${fruit}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
