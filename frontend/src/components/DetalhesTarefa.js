import { useTarefasContext } from "../hooks/useTarefasContext"

const DetalhesTarefa = ({ tarefa }) => {
  const { dispatch } = useTarefasContext()

  const  handleClick = async () => {
    const response = await fetch('/api/tarefas/' + tarefa._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_TAREFA', payload: json})
    }
  }

  return (
    <div className="detalhes-tarefa">
      <h4>{tarefa.titulo}</h4>
      <p><strong>Tempo (min): </strong>{tarefa.tempo}</p>
      <p><strong>Páginas Lidas: </strong>{tarefa.pagslidas}</p>
      <p>{tarefa.createdAt}</p>
      <span onClick={handleClick}>apagar</span>
    </div>
  )
}

export default DetalhesTarefa