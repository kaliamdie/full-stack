const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        // unique: true
    },
    lastName: {
        type: String,
        required: true
       
    },
    password: {
        type: String, 
        required: true
    },
  username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    contactNumber:{
        type:Number
        
    }
},{timestamps:true})

const User = mongoose.model('User', userSchema)

module.exports = User