  const express = require("express");
const app = express();
const path = require("path");

let comments = [
  { id: 0, username: "Sukanshi", comment: "Kuch Nahi" },
  { id: 1, username: "sachin", comment: "Kaun" },
  { id: 2, username: "Ojaswa", comment: "Pols Agayi Pols " },
];

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true})); //for form encoc=ded data

app.get("/", (req, res) => {
  res.send("Root mai aapka swagat hai !");
});

app.get("/blogs", (req, res) => {
  res.render("index", { comments });
});

app.get("/blogs/new", (req, res) => {
  res.render("new");
});

app.post("/blogs", (req, res) => {
  const { username, comment } = req.body;
  const newComment = {
    id: comments.length,
    username,
    comment,
  };
  comments.push(newComment);
  res.redirect("/blogs");
});



app.listen(8080, () => {
  console.log("Server running at port 8080");
});
