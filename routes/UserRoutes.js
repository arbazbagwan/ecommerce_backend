const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/AuthMiddleware');

router.get('/getall', auth, UserController.getAllUsers);
router.get('/getbyid/:id', auth, UserController.getUserById);

module.exports = router;