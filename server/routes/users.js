// user pages and authentication

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// user post requests

router.post('/api/login',userController.login);
router.post('/api/register',userController.register);

// user requests for login, reg verification and voting system

router.get('/api/user',userController.user);
router.post('/api/payment',userController.payment);
router.get('/api/voting/:id', userController.voting);
router.get('/api/verify/:token', userController.verify);



