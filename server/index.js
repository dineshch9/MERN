const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./models/user_model')
const donar= require('./models/donor_information')
const likes = require('./models/likes')
const studentdb = require('./models/studentdb')
const allcomments = require('./models/allcomments')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://dinesh:dinesh@exp.pjxglgo.mongodb.net/mini6')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/api/register', async (req, res) => {
	
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		console.log(req.body);
		const hi = await users.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
			rollno:req.body.rollno
		})
		console.log(hi);
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})
app.post('/api/addcomment', async (req, res) => {
	
	await allcomments.create({
		suggestion:req.body.suggestion,
		discription:req.body.discription

	})
	 res.json({status:"ok"})
	
})

app.post('/api/login', async (req, res) => {
	const user = await users.findOne({
		email: req.body.email,
	})

	if (!user) {
		console.log('no user');
		return res.json({ status: 'error', error: 'Invalid login' })
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
				rollno:user.rollno
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})


app.get('/api/allcomments',async(req,res)=>{
	const data = await allcomments.find();
	
	res.json(data);


})

app.get('/api/topcomments',async(req,res)=>{

	const data = await allcomments.find().where('likes_count').gt(900);
	
	res.json(data);
})

app.post('/api/click',async(req,res)=>{
	flag =req.body.flag;
	console.log(flag);
	console.log(req.body.email);
	// console.log(flag);
	
	if(flag == 1){
		await likes.updateOne({_id:req.body.id}, {$push: { likes: req.body.rollno } });
		await users.updateOne({email:req.body.email}, {$push: { like_ids: req.body.id } });
		res.json({status:"ok from 1"});
		
		
	}else{
		likes.updateOne({_id:req.body.id}, {$pull: { likes: req.body.rollno } });
		users.updateOne({email:req.body.email}, {$pull: { like_ids: req.body.id } });
		res.json({status:"ok from 0"});

	}
	
})

app.post('/api/sort', async (req, res) => {
	
	
	const data = await allcomments.find().sort({ likes_count: -1 }).exec((err, comments) => {
		if (err) {
			console.error('Error retrieving comments:', err);
			
		}
	});


	 res.json(data);
})


app.post('/api/submit', async (req, res) => {
	
	await donar.create({name:req.body.name,rollno:req.body.rollno,mobile_number:req.body.mobile_number,amount:req.body.amount,transaction_id:req.body.transaction_id})
	
	 res.json({status:"ok"});
})
	





	
	





app.listen(8085, () => {
	console.log('Server started on 8085')
})