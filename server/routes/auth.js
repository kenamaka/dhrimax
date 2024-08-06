// user authentication and verificatoin

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// forgot password

router.post('/api/login',authController.login);
router.post('/api/register',authController.register);

// user requests for login, reg verification and voting system

router.get('/api/user',userController.user);
router.post('/api/payment',userController.payment);
router.get('/api/voting/:id', userController.voting);
router.get('/api/verify/:token', userController.verify);







router.get('/api/verify/:token', userController.verify);
