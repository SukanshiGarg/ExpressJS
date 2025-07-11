const express=require('express');
const users=require('./MOCK_DATA.json')

const app=express();
const PORT=8000;

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
}).patch((req,res) =>{
    //edit user with a id 
   return  res.json({status:"pending"})
})
.delete((req,res) => { 
    //edit user with a id 
    res.json({status:"pending"})
});


 

// app.post('/api/users' , (req,res)=>{
//     //todo: To create a new user 
//     return res.json({ status : "pending "});
// })

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