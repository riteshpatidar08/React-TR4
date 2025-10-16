const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Name is too short'],
    maxlength: [30, 'Name is too long'],
  },
  email: { type: String, unqiue: true, required: true },
  password: { type: String, required: true, minlength: [6, 'Password is too short'] },
  isActive: { type: Boolean, default: true },
  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now() },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
