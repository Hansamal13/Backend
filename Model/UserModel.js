
//get the inputs

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // frontend data

    Fname:{
        type:String,    //data type
        required:true,  //validate
    }, 

    Lname:{
        type:String,    
        required:true,  
    },
    Email_address:{
        type:String,   
        required:true, 
    },
    ContactNumber:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    ProfilePhoto:{
        type:String,
        
    }


});

module.exports = mongoose.model(
    "UserModel", //file name
    userSchema  //function name
    
);