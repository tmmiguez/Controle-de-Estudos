const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tarefaSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  tempo: {
    type: Number,
    required: true
  },
  pagslidas: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Tarefa', tarefaSchema)