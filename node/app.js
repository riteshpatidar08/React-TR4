const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const userController = require('./controllers/userController.js');
const userRouter = require('./routes/userRoutes.js');
const User = require('./models/user.js');
const errorHandler = require('./middlewares/errorHandler.js');
app.use(express.json());
app.use(cors());
dotenv.config()
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
app.use('/api/v1', userRouter);
app.use('/api/v1/auth', require('./routes/authRoutes.js'));
//route will go here for like blog resource
//eg route =>  app.use('/api/v1' , blogRouter)
app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

//NUMBER => 34 ,
//decimal => 3.4 ,
//array => [1,3] ,
//string => 'test ,
//null => null ,
//objectId =>
//object : {name : "TEST"}





//NOTE use cloudinary for file upload ,
//NOTE first check how to handle multipart form data on the ui when you take files from ui , multipart form data is the data with files + text .
//NOTE first decide the roles and their functionalities , decides the models fields , 
//NOTE divide the project into resources for backend api creation eg for restaurent management we have resources like tables ,  users can be customers or admin based on the roles create different ui , menu items , orders etc  decide their models and start building api's

//eg pagination , infinite scrolling