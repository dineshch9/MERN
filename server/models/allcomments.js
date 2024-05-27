const mongoose = require('mongoose')
allcomments =new mongoose.Schema({
    suggestion:{ type: String, required: true },
    discription: { type: String },
    likes_count:{type:Number,required:true,default:0},
    
})

 allcomments = mongoose.model('allcomments',allcomments);

module.exports = allcomments