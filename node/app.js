const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userController = require('./controllers/userController.js');
const userRouter = require('./routes/userRoutes.js')
const User = require('./models/user.js')
//NOTE connection mongodb with express using mongoose odm
console.log(userController);
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

// const insertUser = async () => {
//   const user = new User({
//     name: 'TEST',
//     age: 34,
//     email: 'test@gmail.com',
//   });
//   const data = await user.save();
//   console.log(data);
// };
// insertUser() //create fn for find data , update and delete
// app.get('/users', userController.getAllUsers);

//routes will go here for users
app.use('/api/v1', userRouter)
//route will go here for like blog resource
//eg route =>  app.use('/api/v1' , blogRouter)

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
