require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const tarefaRoutes = require('./routes/tarefas')
const userRoutes = require('./routes/user')

// app express
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// rotas
app.use('/api/tarefas', tarefaRoutes)
app.use('/api/user', userRoutes)

//conectar a database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // método listen para requests
    app.listen(process.env.PORTA, () => {
      console.log('conectado ao db & listening na porta', process.env.PORTA)
    })
  })
  .catch((error) => {
    console.log(error)
  })


