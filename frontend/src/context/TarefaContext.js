import { createContext, useReducer } from 'react'

export const TarefasContext = createContext()

export const tarefasReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TAREFAS':
      return {
        tarefas: action.payload
      }
    case 'CREATE_TAREFA':
      return {
        tarefas: [action.payload, ...state.tarefas]
      }
    default:
      return state
  }
}

export const TarefasContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tarefasReducer, {
    tarefas: null
  })

  return (
    <TarefasContext.Provider value={{...state, dispatch}}>
      { children }
    </TarefasContext.Provider>
  )
}