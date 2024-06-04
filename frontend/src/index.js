import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TarefasContextProvider } from './context/TarefaContext';
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TarefasContextProvider>
        <App />
      </TarefasContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);