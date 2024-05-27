const mongoose = require('mongoose')

student =new mongoose.Schema({
    rollno:{ type: Number, required: true },
    name: { type: String },
    department:{type:String,required:true},
    mobile_number:{type:Number,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    batch:{type:Number,required:true}
    
})

student = mongoose.model('student',student);

module.exports = student