const express = require('express')
const {
  criarTarefa,
  getTarefas,
  getTarefa,
  deleteTarefa,
  updateTarefa
} = require('../controllers/tarefaController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//GET de todas as tarefas
router.get('/', getTarefas)

//GET uma única tarefa
router.get('/:id', getTarefa)

//POST uma nova tarefa
router.post('/', criarTarefa)

//DELETE uma tarefa
router.delete('/:id', deleteTarefa)

//PATCH uma tarefa
router.patch('/:id', updateTarefa)


module.exports = router