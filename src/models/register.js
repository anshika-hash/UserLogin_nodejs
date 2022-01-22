const mongoose = require('mongoose');

const userData = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique : true
    },
    password:{
        type:String,
        require:true,
        
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    zip:{
        type:Number,
        require:true
    }  
})

const Data = new  mongoose.model('userAuth',userData);
module.exports = Data;