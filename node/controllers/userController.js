const User = require('./../models/user.js');
const cloudinary = require('../config/cloudinary.js')

exports.getAllUsers = async (req, res , next) => {
  try {
    console.log(req.query)
    const users = await User.find({role : req.query.role});
    if (users.length <= 0) {
      //   res.status(404).json({ message: 'No user found' });
      const error = new Error('No user found');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      message: 'success',
      data: users,
      length: users.length,
    });
  } catch (error) {
  next(error)
   
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.file)

    const result = await cloudinary.uploader.upload(req.file.path)
    console.log(result)
    const user = await User.create({...req.body, avatar : result.secure_url}) ;
    res.status(201).json({
      message : 'user created',
      user
    })
  } catch (error) {}
};

exports.getAUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
};

//delete and update
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const user = await User.findByIdAndUpdate(id, { name }, { new: true });
    if (!user) {
      const error = new Error('No user found');

      throw error;
    }
    res.status(201).json({
      message: 'user updated successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
