const Tarefa = require('../models/tarefaModelo')
const mongoose = require('mongoose')

// GET todas as tarefas
const  getTarefas = async (req, res) => {
  const user_id = req.user._id
  
  const tarefas = await Tarefa.find({ user_id }).sort({createdAt: -1})

  res.status(200).json(tarefas)
}

//GET uma tarefa
const getTarefa = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Não existe essa tarefa!'})
  }

  const tarefa = await Tarefa.findById(id)

  if (!tarefa) {
    return res.status(404).json({error: 'Não existe essa tarefa!'})
  }

  res.status(200).json(tarefa)
}


// criar uma nova tarefa
const criarTarefa = async (req, res) => {
  const {titulo, tempo, pagslidas} = req.body

  let camposVazios = []

  if(!titulo) {
    camposVazios.push('titulo')
  }
  if(!tempo) {
    camposVazios.push('tempo')
  }
  if(!pagslidas) {
    camposVazios.push('pagslidas')
  }
  if(camposVazios.length > 0) {
    return res.status(400).json({ error: 'Por favor preencha todos os campos', camposVazios })
  }

  // documento para a db
  try {
    const user_id = req.user._id
    const tarefa = await Tarefa.create({titulo, tempo, pagslidas, user_id})
    res.status(200).json(tarefa)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// DELETE uma tarefa
const deleteTarefa = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Não existe essa tarefa!"})
  }

  const tarefa = await Tarefa.findOneAndDelete({_id: id})

  if (!tarefa) {
    return res.status(400).json({error: "Não existe essa tarefa!"})
  }

  res.status(200).json(tarefa)
}

// UPDATE uma tarefa
const updateTarefa = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Não existe essa tarefa!"})
  }

  const tarefa = await Tarefa.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!tarefa) {
    return res.status(400).json({error: "Não existe essa tarefa!"})
  }

  res.status(200).json(tarefa)
}

module.exports = {
  getTarefas,
  getTarefa,
  criarTarefa,
  deleteTarefa,
  updateTarefa
}