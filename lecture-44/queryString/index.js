
const express = require('express'); //fun
const app = express(); //obj or instance



app.get('/search', (req,res) =>{
    console.log(req.query);
    console.log(req.query.search);
    let {search}=req.query;
    res.send(search);

})



//views:

// String or Array	A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.	
// process.cwd() + '/views'

















app.listen(8080 , ()=>{
    console.log('mera server chal gya at 8080')
})