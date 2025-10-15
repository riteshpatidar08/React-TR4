const User = require('./../models/user.js');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
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
    res.status(error.statusCode).json({
      message: 'failed',
      data: error.message,
    });
  }
};

exports.createUser = async () => {
  try {
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
