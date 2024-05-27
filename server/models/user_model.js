const mongoose = require('mongoose')

const user = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		rollno: { type: Number, required:true,unique:true },
		like_ids:{type:[String]}
	}
)

const users = mongoose.model('users', user)

module.exports = users