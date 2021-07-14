const mongoose = require('mongoose');
const MongoUrl = process.env.MONGOURL;

mongoose.Promise = global.Promise;

mongoose.connect(MongoUrl+'?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error',()=>{
    console.log('Could not connected to mongodb Trying Again...')
    setTimeout(() => {
        mongoose.connect(MongoUrl+'?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
    }, 1000);
})
db.on('open',()=>{
    console.log('Connected To Mongo DB')
})
exports.mongoose = mongoose;
exports.db = db;

