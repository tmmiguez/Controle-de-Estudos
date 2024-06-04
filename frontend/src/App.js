import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pags e componentes
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/cadastro"
              element={<Cadastro />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
