//Express is a web application framework for Node.js that simplifies the process of building servers and APIs
const express = require('express'); //returns a function 

const app=express(); //object or instance


app.listen(8080,()=>{
    console.log("Server connected at Port 8080");
})


//Middleware runs on every incoming request if you use it with app.use() without specifying a path.

//adding app.use
//app.use is a middleware function , it accepts a callback-fucntion
// app.use((req,res)=>{  //callback function is mandatory when using app.use
//     // console.log(req);
//     // console.log(res);
//     // console.log("You made a request Sukanshi");
//     res.send('<h1>Hiiii from sukanshi garg</h1>')
// })

//jab bhi hum apne server ko request bhejte hain toh 2 objects store hote hain 
//request and response object 

// agar mujhe response send karna hota hai toh mai res.send() ka use krti hun 
//it can send html,json,etc.





//with path ie. for specific path only and not for otheer cases 

app.use('/middleware',(req,res)=>{  //callback function is mandatory when using app.use
    // console.log(req);
    // console.log(res);
     console.log("You made a request Sukanshi at specific path middleware");
    res.send('<h1>Hiiii from sukanshi garg using specific paths</h1>')
})
