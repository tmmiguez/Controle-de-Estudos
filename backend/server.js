require('dotenv').config()

const express = require('express')
const tarefaRoutes = require('./routes/tarefas')

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

// método listen para requests
app.listen(process.env.PORTA, () => {
  console.log('listen na porta', process.env.PORTA)
})
