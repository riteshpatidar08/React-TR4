const express = require('express') ;
const userController = require('../controllers/userController.js')

//express.Router() gives us a modularize way of routing for each resouse , like the router works independently for users api
const router = express.Router();

router.get('/users',userController.getAllUsers)

module.exports = router