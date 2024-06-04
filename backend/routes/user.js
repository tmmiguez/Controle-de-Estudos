const express = require('express')
const { loginUser, cadastroUser } = require('../controllers/userController')

const router = express.Router()

// rota login
router.post('/login', loginUser)

//rota cadastro
router.post('/cadastro', cadastroUser)

module.exports = router