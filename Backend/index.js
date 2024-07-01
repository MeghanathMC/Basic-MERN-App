const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

/*after creating model */ const UserModel = require("./Models/User");
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://meghanath:2314sGv%40@cluster0.rinpv6y.mongodb.net/app1"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log("server is running!");
});
