var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    firstName : {
        type: String,
    },
    lastName : {
        type: String,
    },
    birthday : {
        type: Date,
    },
    balance : {
        type: Number,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    
  });

var Users = mongoose.model('users', UsersSchema);
module.exports = Users;