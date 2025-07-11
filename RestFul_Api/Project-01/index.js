console.log("🔥 Server file loaded 🔥");
const fs=require('fs');
const express=require('express');
const users=require('./MOCK_DATA.json')

const app=express();
const PORT=8000;


//Middlware-Plugin
app.use(express.urlencoded({extended:false}))

// app.use((req,res,next) =>{
//     console.log("Hello from middleware 1 ");
//     // return res.end("hey");
//     next();
// })

// app.use((req,res,next) =>{
//     console.log("hello from mdddleware 2");
//     next();
// })

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()}: ${req.method}: ${req.url}\n`, (err) => {
        if (err) {
            console.error("Failed to write log:", err);
            return res.status(500).send("Internal Server Error");
        }
        next();
    });
});





//routes
app.get('/api/users', (req, res)=> {
    return res.json(users);
});

app.get('/users' , (req,res)=>{
    const html= `
    <ul>
         ${users.map((user) => `<li> ${user.first_name}</li>`).join("")}
    </ul> 
    `
    res.send(html);
});


app.route('/api/users/:id').get((req,res)=>{
    const id= Number(req.params.id);
    const user=users.find((user) => user.id === id );
    return res.json(user);
})
.patch((req,res) =>{
    //edit user with a id 
   return  res.json({status:"pending"})
})

.delete((req,res) => { 
    //edit user with a id 
    res.json({status:"pending"})
});


app.post('/api/users' , (req,res)=>{
    //todo: To create a new user 
    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users), (err,data)=>{
       return res.json({ status :"success ", id:users.length});
    })
    
});

// app.patch('/api/users/:id', (req,res) =>{
//     //todo: To edit a user with a ID 
//     return res.json({status:"pending"});
// });

// app.delete('/api/users/:id' , (res,req) => {
//     //todo : to delete the user with a specific id 
//     return res.json({status: "Pending"});
// })
 

app.listen(PORT,()=>{
    console.log(`server started at port :${PORT}`)
})