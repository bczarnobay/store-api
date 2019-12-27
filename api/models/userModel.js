const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
mongoose.model('Users', UserSchema);