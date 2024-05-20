import { useState } from "react"
import { useTarefasContext } from "../hooks/useTarefasContext"

const FormularioTarefa = () => {
  const { dispatch } = useTarefasContext()

  const [titulo, setTitulo] = useState('')
  const [tempo, setTempo] = useState('')
  const [pagslidas, setPagslidas] = useState('')
  const [error, setError] = useState(null)
  const [camposVazios, setCamposVazios] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const tarefa = {titulo, tempo, pagslidas}

    const response = await fetch('/api/tarefas', {
      method: 'POST',
      body: JSON.stringify(tarefa),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setCamposVazios(json.camposVazios)
    }
    if (response.ok) {
      setTitulo('')
      setTempo('')
      setPagslidas('')
      setError(null)
      setCamposVazios([])
      console.log('nova tarefa adicionada', json)
      dispatch({type: 'CREATE_TAREFA', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Adicionar uma nova tarefa</h3>

      <label>Matéria:</label>
      <input 
        type="text"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        className={camposVazios.includes('titulo') ? 'error' : ''}
        />

      <label>Tempo (min):</label>
      <input 
        type="number"
        onChange={(e) => setTempo(e.target.value)}
        value={tempo}
        className={camposVazios.includes('tempo') ? 'error' : ''}
        />

      <label>Páginas Lidas:</label>
      <input 
        type="number"
        onChange={(e) => setPagslidas(e.target.value)}
        value={pagslidas}
        className={camposVazios.includes('pagslidas') ? 'error' : ''}
        />

        <button>Adicionar Tarefa</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default FormularioTarefa