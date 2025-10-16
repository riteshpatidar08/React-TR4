const express = require('express') ;

const router = express.Router() ;
const authController = require('./../controllers/authController.js')

//signup 
router.post('/user' ,authController.signUp )

module.exports = router