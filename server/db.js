const mongoos = require('mongoose');
const mongoURI = 'mongodb+srv://harshsharmaa990:harsh9560@cluster0.cb5f1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDb = ()=>{
 mongoos.connect(mongoURI)
}
if(mongoDb){
    console.log("database Connected")
}
module.exports = mongoDb;