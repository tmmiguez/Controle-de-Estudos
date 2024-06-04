const User = require('../models/userModelo')
const jwt = require('jsonwebtoken')

const criarToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
  const {email, senha} = req.body

  try {
    const user = await User.login(email, senha)

    const token = criarToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//cadastro user
const cadastroUser = async (req, res) => {
  const {email, senha} = req.body

  try {
    const user = await User.cadastro(email, senha)

    const token = criarToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { cadastroUser, loginUser}