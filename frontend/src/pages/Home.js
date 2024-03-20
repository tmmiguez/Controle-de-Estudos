import { useEffect, useState } from "react"

// componentes
import DetalhesTarefa from '../components/DetalhesTarefa'
import FormularioTarefa from "../components/FormularioTarefa"

const Home = () => {
  const [tarefas, setTarefas] = useState(null)

  useEffect(() => {
    const fetchTarefas = async () => {
      const response = await fetch('/api/tarefas')
      const json = await response.json()

      if (response.ok) {
        setTarefas(json)
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