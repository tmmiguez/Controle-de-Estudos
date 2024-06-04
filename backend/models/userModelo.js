const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  }
})

//método cadastro
userSchema.statics.cadastro = async function(email, senha) {

  if (!email || !senha) {
    throw Error('Todos os campos devem estar preenchidos')
  }
  if (!validator.isEmail(email)) {
    throw Error('O Email não é válido')
  }
  if (!validator.isStrongPassword(senha)) {
    throw Error('A senha não é forte o suficiente')
  }

  const existe = await this.findOne({ email })

  if (existe) {
    throw Error('Este email já está em uso')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(senha, salt)

  const user = await this.create({ email, senha: hash })

  return user
}

//método login
userSchema.statics.login = async function(email, senha) {

  if (!email || !senha) {
    throw Error('Todos os campos devem estar preenchidos')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Email incorreto')
  }

  const corresponde = await bcrypt.compare(senha, user.senha)

  if (!corresponde) {
    throw Error('Senha incorreta')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)