import { TarefasContext } from '../context/TarefaContext'
import { useContext } from 'react'

export const useTarefasContext = () => {
  const context = useContext(TarefasContext)

  if (!context) {
    throw Error('useTarefasContext precisa ser usado dentro de TarefasContextProvider')
  }

  return context
}