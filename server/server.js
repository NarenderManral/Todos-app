var {mongoose}=require("./db/mongoose");
var {Todo}=require("./models/todo");
var {User} =require("./models/user");

var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.use(bodyParser.json());

app.post("/todos",(req,res)=>{
    var todo=new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});

app.listen(3000,()=>{
    console.log("Started on port 3000");
});
// var user =new User({
//     userName:"NarenderSingh",
//     email:"manralnabbu@gmail.com"
// });

// user.save();

// var newTodo =new Todo({
//     text:"Cook Dinner"
// });

// newTodo.save().then((doc)=>{
//     console.log("New Todo",doc);
// },(err)=>{
//     console.log(err);
// });

// var newTodo =new Todo({
//     text:"   Go To gym   "
// });

// newTodo.save().then((doc)=>{
//     console.log("New Todo",doc);
// },(err)=>{
//     console.log(err);
// });