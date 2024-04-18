import { useEffect } from "react"
import { useTarefasContext } from "../hooks/useTarefasContext"

// componentes
import DetalhesTarefa from '../components/DetalhesTarefa'
import FormularioTarefa from "../components/FormularioTarefa"

const Home = () => {
  const {tarefas, dispatch} = useTarefasContext()

  useEffect(() => {
    const fetchTarefas = async () => {
      const response = await fetch('/api/tarefas')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_TAREFAS', payload: json})
      }
    }

    fetchTarefas()
  }, [])

  return (
    <div className="home">
      <div className="tarefas">
        {tarefas && tarefas.map((tarefa) => (
          <DetalhesTarefa key={tarefa._id} tarefa={tarefa} />
        ))}
      </div>
      <FormularioTarefa />
    </div>
  )
}

export default Home