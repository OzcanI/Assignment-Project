const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://ibrahim:HMN844CkhEC1ZQN7@cluster0.2u2qu.mongodb.net/my_assignment?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error',()=>{
    console.log('Could not connected to mongodb Trying Again...')
    setTimeout(() => {
        mongoose.connect('mongodb+srv://ibrahim:HMN844CkhEC1ZQN7@cluster0.2u2qu.mongodb.net/my_assignment?retryWrites=true&w=majority',{
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