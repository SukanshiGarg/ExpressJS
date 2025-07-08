//CRUD OPERATIONS
use("CrudDB")


//CREATE
// db.createCollection("courses")

// db.courses.insertOne({
//     name:"Sukanshi Garg",
//     price:0,
//     assignments:12,
//     projects:46
// })

// db.courses.insertMany(
//     [
//   {
//     "name": "Sukanshi Garg",
//     "price": 0,
//     "assignments": 12,
//     "projects": 46
//   },
//   {
//     "name": "Aryan Verma",
//     "price": 499,
//     "assignments": 8,
//     "projects": 23
//   },
//   {
//     "name": "Ishita Mehra",
//     "price": 999,
//     "assignments": 15,
//     "projects": 12
//   },
//   {
//     "name": "Rohit Sharma",
//     "price": 349,
//     "assignments": 10,
//     "projects": 18
//   },
//   {
//     "name": "Meenal Kapoor",
//     "price": 0,
//     "assignments": 20,
//     "projects": 30
//   },
//   {
//     "name": "Yash Tiwari",
//     "price": 799,
//     "assignments": 5,
//     "projects": 9
//   },
//   {
//     "name": "Ananya Sen",
//     "price": 149,
//     "assignments": 18,
//     "projects": 33
//   },
//   {
//     "name": "Devansh Gupta",
//     "price": 0,
//     "assignments": 25,
//     "projects": 47
//   },
//   {
//     "name": "Nikita Jain",
//     "price": 299,
//     "assignments": 7,
//     "projects": 14
//   },
//   {
//     "name": "Kabir Joshi",
//     "price": 999,
//     "assignments": 13,
//     "projects": 25
//   }
// ]


// )

//READ

// let b= db.courses.findOne({price:0})
// console.log(b)


//UPDATE
db.courses.updateOne({price:0}, {$set:{price:100}})

db.courses.updateMany({price:0},
    {$set:{price:1000}}
)

//DELETE
db.courses.deleteMany({price:1000})

