import { useAuthContext } from './useAuthContext'
import { useTarefasContext} from './useTarefasContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: tarefasDispatch } = useTarefasContext()

  const logout = () => {
    localStorage.removeItem('user')

    dispatch({ type: 'LOGOUT' })
    tarefasDispatch({type: 'SET_TAREFAS', payload: null})
  }

  return { logout }
}