const express = require('express'); // fun
const app = express(); // obj or instance

app.set('view engine', 'ejs');

// root route
app.get('/', (req, res) => {
  // res.send('<h1>Hii</h1>')
  res.render('index'); // default path is 'views/index.ejs'
});

app.listen(8080, () => {
  console.log('mera server chal gya at 8080');
});
