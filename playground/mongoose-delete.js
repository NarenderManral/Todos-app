var mongoose=require("./../server/db/mongoose");
var {Todo}=require("./../server/models/todo");
var {User}=require('./../server/models/user');

const {ObjectID} =require("mongodb");

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:"5ea34972ae03d5ce4aac2aa4"}).then((res)=>{
//     console.log(res);
// });

Todo.findByIdAndRemove("5ea34a1fae03d5ce4aac2b1a").then((res)=>{
    console.log(res);
});