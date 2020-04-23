
var mongoose =require("mongoose");

var User=mongoose.model("User",{
    userName:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    email:{
        required:true,
        type:String,
        minlength:2,
        trim:2
    }
});

module.exports={User};