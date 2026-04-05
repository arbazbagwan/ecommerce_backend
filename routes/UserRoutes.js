const express = require('express');
const router  = express.Router();
const UserController = require('../controllers/UserController');

router.get('/getall', UserController.getAllUsers);
router.get('/getbyid/:id', UserController.getUserById);


module.exports = router;