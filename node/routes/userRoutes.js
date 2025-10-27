const express = require('express');
const userController = require('../controllers/userController.js');
const authenticateToken = require('../middlewares/authenticateToken.js');
const checkRole = require('../middlewares/checkRole.js');
const upload = require('../middlewares/upload.js')
//express.Router() gives us a modularize way of routing for each resouse , like the router works independently for users api
const router = express.Router();

//get users
router.get('/users', authenticateToken , checkRole(['admin']) , userController.getAllUsers);
//create user
router.post('/users', upload.single('avatar') ,userController.createUser);

//getUserById
router.get('/users/:id', userController.getAUser);

//update a user
router.put('/users/:id', userController.updateUser);

module.exports = router;
