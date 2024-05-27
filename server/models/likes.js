const mongoose = require('mongoose')
likes =new mongoose.Schema({
    id:{ type: String, required: true },
    
    Array_of_rollno:{type:[Number],required:true,default:[]}
    
})

 likes = mongoose.model('likes',likes);

module.exports = likes










