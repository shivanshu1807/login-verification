const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    phnoo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    nation:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    passwordc:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Registeruser', userSchema )