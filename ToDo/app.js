const express = require("express");
const bodyParser = require("body-parser");
// const request = require('request');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extends: true }));
app.use(express.static("public"))

var items = [ ];

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  var day = " ";

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day , newItems : items });
});

app.post("/",  (req, res) =>{
   item = req.body.newTask;
  // console.log(task)
  items.push(item);
  res.redirect("/");
})

app.listen(3000, () => {
  console.log("lestning port 3000");
});
