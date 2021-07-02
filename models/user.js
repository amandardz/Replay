const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  }, 
  lastName: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    unique: true, 
    trim: true, 
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  }, 
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [({length}) => length >= 8, 'Password requires 8 characters']
  },
  userCreated: {
    type: Date, 
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User; 