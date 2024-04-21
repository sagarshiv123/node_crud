const mongoose = require('mongoose');

//dEfine the person schema

const presonSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    salary:{
        type:String,
        required:true
    }

})

const Person = mongoose.model('Person',presonSchema);
module.exports = Person;