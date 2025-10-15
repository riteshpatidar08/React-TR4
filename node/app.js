const express = require('express');
const app = express();
const mongoose = require('mongoose');
//NOTE connection mongodb with express using mongoose odm

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb://localhost:27017/mongodbTR4'
    );
    console.log('DB CONNECTED 🔥');
    // console.log(connection)
  } catch (error) {
    console.log(error);
  }
};

connectDb();

const userSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean, default: true },
});
const User = mongoose.model('user', userSchema);

const insertUser = async () => {
  const user = new User({
    name: 'TEST',
    age: 34,
    email: 'test@gmail.com',
  });
  const data = await user.save();
  console.log(data);
};
// insertUser() //create fn for find data , update and delete
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json({ message: 'No user found' });
    }
    res.status(200).json({
      message: 'success',
      data: users,
      length: users.length,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failed',
      data: error.message,
    });
  }
});
app.listen(3000, () => {
  console.log('Server is running on 3000');
});

//NUMBER => 34 ,
//decimal => 3.4 ,
//array => [1,3] ,
//string => 'test ,
//null => null ,
//objectId =>
//object : {name : "TEST"}
