var mongoose=require("./../server/db/mongoose");
var {Todo}=require("./../server/models/todo");
var {User}=require('./../server/models/user');

const {ObjectID} =require("mongodb");

// var id="5ea1f2ab4e2b9f177086ec5f";

// if(!ObjectID.isValid(id)){
//     console.log("Not a valid Id");
// }

// Todo.find({_id:id}).then((todos)=>{
//     console.log("Todos :",todos);
// });

// Todo.findOne({_id:id}).then((todo)=>{
//     console.log("Todo :",todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log("Todo By Id :",todo);
// }).catch((e)=>{
//     console.log(e);
// });

var uid="5ea0ab7f481f6e166c04492c";

User.findById(uid).then((user)=>{
    if(!user){
        return console.log("No such User found");
    };
    console.log("User By Id :",user);
}).catch((e)=>{
    console,log(e);
});