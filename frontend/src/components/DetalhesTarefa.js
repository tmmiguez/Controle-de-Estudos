const DetalhesTarefa = ({ tarefa }) => {
  return (
    <div className="detalhes-tarefa">
      <h4>{tarefa.titulo}</h4>
      <p><strong>Tempo (min): </strong>{tarefa.tempo}</p>
      <p><strong>Páginas Lidas: </strong>{tarefa.pagslidas}</p>
      <p>{tarefa.createdAt}</p>
    </div>
  )
}

export default DetalhesTarefa