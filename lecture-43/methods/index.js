// Used for making server
const express = require('express'); // Function
const app = express(); // Object or instance

// GET

app.get('/', (req, res) => {   // path, callback     //root -> '/'
  res.send('<h1>Hello, Sukanshi Garg, yeh mera path hai</h1>');
});

// GET /cat
app.get('/cat', (req, res) => {
  res.send('<h1>Hello, Sukanshi Garg, yeh mera "/cat" path hai</h1>');
});

// GET /dog
app.get('/dog', (req, res) => {
  res.send('<h1>Hello, Sukanshi Garg, yeh mera "/dog" path hai</h1>');
});

app.get('/orange', (req, res) => {
  res.send('<h1>Hello, Sukanshi Garg, yeh mera "/orange" path hai</h1>');
});

app.get('/apple', (req, res) => {
  res.send('<h1>Hello, Sukanshi Garg, yeh mera "/apple" path hai</h1>');
});


//bad request ko handle
//agar universal selector hai isliye use it at the last warna yeh har root ke answer mai bad request hi boldega bina aage check kiye
app.get('*' , (req,res) => {
    res.send("you hit a bad request try again ")
})



// Start server
app.listen(8080, () => {
  console.log("Server connected at Port 8080");
});
