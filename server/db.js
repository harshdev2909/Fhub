const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://harshsharmaa990:harsh9560@cluster0.cb5f1.mongodb.net/harsh?retryWrites=true&w=majority&appName=Cluster0';

const mongoDb = async ()=>{
   await mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));
  const fetched_data = mongoose.connection.db.collection("Food_items");
  fetched_data.find({}).toArray(function(err,data){
    if(err) console.log(err);
    else console.log(data)
  })
}


module.exports = mongoDb;



