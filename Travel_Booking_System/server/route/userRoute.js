const express = require('express');
const userRouter = express.Router();
const { allUser, userRegister, userLogin, passwordReset } = require('../controller/user')


userRouter.get('/alluser', allUser)
userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.patch('/reset', passwordReset)

module.exports = { userRouter }
