const mongoose = require('mongoose')
donor_information =new mongoose.Schema({
    name:{ type: String, required: true },
    rollno: { type: Number,required:true },
    mobile_number:{type:Number,required:true},
    amount:{type:Number,required:true},
    transaction_id:{type:Number,required:true}
    
})

donor_information = mongoose.model('donor_information',donor_information);

module.exports = donor_information