const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    age:{
        type: Number,
        min: 0,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        unique: true, 
        trim: true,
      },
      email: {
        type: String,
        required: true, 
        unique: true, 
        lowercase: true, 
      },
      password: {
        type: String,
        required: true,
        minlength: 6, 
      },
      roles: {
        type: [String], 
        default: ['user'], 
      },
      profile: {
        type: profileSchema, 
        required: true, 
      },
      lastLogin: {
        type: Date,
        default: Date.now, 
      },
    }, { timestamps: true }); 
    
   
    const User = mongoose.model('User', userSchema);
    
  
    module.exports = User;