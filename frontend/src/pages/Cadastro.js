import { useState } from 'react'
import { useCadastro } from "../hooks/useCadastro"

const Cadastro = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const {cadastro, error, isLoading} = useCadastro()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await cadastro(email, senha)
  }

  return (
    <form className="cadastro" onSubmit={handleSubmit}>
      <h3>Cadastro</h3>


      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Senha:</label>
      <input
        type="password"
        onChange={(e) => setSenha(e.target.value)}
        value={senha}
      />

      <button disabled={isLoading}>Cadastrar</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Cadastro