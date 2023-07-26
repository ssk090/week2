const express = require("express");
const app = express();
const port = 3000;

function configureMiddleware(req, res, next) {
  console.log("from Middlewares: " + req.headers.counter);
  next();
}

app.use(configureMiddleware);

function calculateSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  // const counter = req.query.counter;
  console.log(req.headers);
  const counter = req.headers.counter;
  const calculatedSum = calculateSum(counter);
  const answer = "The Sum is " + calculatedSum;
  res.send(answer);
}

function createUser(req, res) {
  res.send("createUser: POST method");
}

function updateUser(req, res) {
  res.send("updateUser: PUT method");
}

function deleteUser(req, res) {
  res.send("deleteUser: DELETE method");
}

// app.get("/handleSum", handleFirstRequest);
// app.post("/createUser", createUser);
app.post("/handleSum", handleFirstRequest);
app.put("/updateUser", updateUser);
app.delete("/deleteUser", deleteUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
