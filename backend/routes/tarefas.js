const express = require('express')
const Tarefa = require('../models/tarefaModelo')

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
router.post('/', async (req, res) => {
  const {titulo, tempo, pagslidas} = req.body

  try {
    const tarefa = await Tarefa.create({titulo, tempo, pagslidas})
    res.status(200).json(tarefa)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
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