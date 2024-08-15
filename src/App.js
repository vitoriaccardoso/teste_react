

import React from 'react';
import './App.css';
import Home from './componentes/Home';
import Aluno from './componentes/Alunos';
import sobre from './componentes/sobre';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>CRUD teste</h1>


      <ul>
        <li>Página Inicial</li>
        <li>Cadastro de alunos</li>
        <li>Sobre</li>
      </ul>
    </div>
  );
}

export default App;
