const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    location:{
        type:String
    }
})

module.exports = User =mongoose.model('student',userSchema)