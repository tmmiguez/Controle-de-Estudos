import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, senha)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>


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

      <button>Login</button>
    </form>
  )
}

export default Login