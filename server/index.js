const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3001', // Adjust based on your frontend's URL
    methods: ['GET', 'POST'], // Add other methods as needed
    credentials: true,
}));
app.use(express.json());
const port = 5000;
const URL = 'mongodb+srv://harshdev2909:harsh9560@fhub.nk7sj.mongodb.net/?retryWrites=true&w=majority&appName=fhub';
app.get('/',(req,res)=>{
    res.send("hello");
})
app.use('/api',require('./route/productRoute'));
app.listen(port,()=>{
    console.log("server is running")
})

mongoose.connect(URL)
.then(()=>{
    console.log("Database connected")
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);
}).catch(err =>{
    console.log(err);
})