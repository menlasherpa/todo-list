// ********* express package ***********
const express = require("express");
const app = express();
app.use(express.static("public"));



// ********* using custom modules ***********
const date = require(__dirname + "/date.js");



// ********* body-parser package ***********
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));



// ********* Setting up ejs as the default view point ***********
app.set("view engine", "ejs");



// ********* variable declaration ***********
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];



// ********* GET request ***********
app.get("/", function(req, res) {
  const day = date.getDate();

// ********* To tell which day it is ***********
  // const currentDay = today.getDay();
  // const day = "";
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error: Current day is equal to: " + currentDay);
  // }

  res.render("list", {
    listTitle: day,
    newListItems: items
  });

// ********* To tell if it's a weekday or weekend ***********
  // if(currentDay === 6 || currentDay === 0) {
  //   day = "Weekeend";
  //   // res.write("<h1>It's weekend</h1>");
  //   // res.write("<p>Yippyy</p>");
  //   // res.send();
  // } else {
  //   day = "Weekday";
  //   // res.sendFile(__dirname + "/index.html");
  // }
  //   res.render("list", {kindOfDay: day});
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
});

app.get("/about", function(req, res) {
  res.render("about");
})



// ********* POST request ***********
app.post("/", function(req, res) {
  console.log(req.body);

  const item = req.body.newItem;
  // to stop adding work items to the homepage lists
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
});



// ********* Port initialize ***********
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
