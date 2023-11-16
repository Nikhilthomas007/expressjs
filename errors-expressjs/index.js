const express = require("express");
const app = express();
const AppError = require("./AppError");

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "qwerty") {
    next();
  }
  //   res.send("PASSWORD NEEDED!");
  // res.status(401);
  // throw new Error("Password required!");
  throw new AppError("Password required!", 401);
};

app.get("/secret", verifyPassword, (req, res) => {
  res.send("SECRET IS SECRET");
});

app.get("/error", (req, res) => {
  hello.code();
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not an admin!", 403);
});

// app.use((err, req, res, next) => {
//   console.log("**************************");
//   console.log("**********ERROR***********");
//   console.log("**************************");
//   console.log(err);
//   //   res.status(500).send("We got an error!");
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong!" } = err;
  // res.status(status).send("ERROR!!!");
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
