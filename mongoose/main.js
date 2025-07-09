
import mongoose from "mongoose";
import express from "express";
import Todo from "./models/Todo.js"; // ✅ fixed path

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
await mongoose.connect("mongodb://localhost:27017/todoApp");

app.get('/', async (req, res) => {
  const todo = new Todo({
    title: "Hey First todo",
    desc: "hiii",
    isDone: false,
    days: 12
  });

  await todo.save();
  res.send('Todo Saved!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

