const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/users';
mongoose.connect(uri, {userNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB connected");	
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});