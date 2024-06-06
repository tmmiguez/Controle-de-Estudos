import { useEffect } from "react"
import { useTarefasContext } from "../hooks/useTarefasContext"
import { useAuthContext } from '../hooks/useAuthContext'

// componentes
import DetalhesTarefa from '../components/DetalhesTarefa'
import FormularioTarefa from "../components/FormularioTarefa"

const Home = () => {
  const {tarefas, dispatch} = useTarefasContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchTarefas = async () => {
      const response = await fetch('/api/tarefas', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_TAREFAS', payload: json})
      }
    }
  
    if (user) {
      fetchTarefas()
    }
  }, [dispatch, user])

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