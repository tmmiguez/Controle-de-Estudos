require('dotenv').config()

const express = require('express')

// app express
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// rotas
app.get('/', (req, res) => {
  res.json({mssg: "Bem-vindo ao app"})
})

// método listen para requests
app.listen(process.env.PORTA, () => {
  console.log('listen na porta', process.env.PORTA)
})
