import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TarefasContextProvider } from './context/TarefaContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TarefasContextProvider>
      <App />
    </TarefasContextProvider>
  </React.StrictMode>
);