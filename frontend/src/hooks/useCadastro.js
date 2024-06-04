import { useState } from "react"
import { useAuthContext } from './useAuthContext'

export const useCadastro = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const cadastro = async (email, senha) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/cadastro', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, senha})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))

      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  }

  return { cadastro, isLoading, error }
}