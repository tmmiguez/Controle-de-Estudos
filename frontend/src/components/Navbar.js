import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Controle de Estudos</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Sair</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar