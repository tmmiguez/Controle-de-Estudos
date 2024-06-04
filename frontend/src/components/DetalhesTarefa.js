import { useTarefasContext } from "../hooks/useTarefasContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

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
      <p>{formatDistanceToNow(new Date(tarefa.createdAt), { addSuffix: true, locale: ptBR})}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete_forever</span>
    </div>
  )
}

export default DetalhesTarefa