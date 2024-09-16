const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const URL = 'mongodb+srv://harshsharmaa990:harsh9560@cluster0.cb5f1.mongodb.net/harsh?retryWrites=true&w=majority&appName=Cluster0';
app.get('/',(req,res)=>{
    res.send("hello");
})



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