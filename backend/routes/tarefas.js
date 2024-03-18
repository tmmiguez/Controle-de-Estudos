const express = require('express')

const router = express.Router()

//GET de todas as tarefas
router.get('/', (req, res) => {
  res.json({mssg: 'GET todas as tarefas'})
})

//GET uma única tarefa
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET uma única tarefa'})
})

//POST uma nova tarefa
router.post('/', (req, res) => {
  res.json({mssg: 'POST uma nova tarefa'})
})

//DELETE uma tarefa
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE uma tarefa'})
})

//PATCH uma tarefa
router.patch('/:id', (req, res) => {
  res.json({mssg: 'PATCH uma tarefa'})
})



module.exports = router