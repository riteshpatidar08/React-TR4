const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    isActive: { type: Boolean, default: true },
  });

  const User = mongoose.model('user', userSchema);

  module.exports = User