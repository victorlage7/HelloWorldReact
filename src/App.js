import React, { useState } from 'react';
import './App.css';
import Tabela from './componentes/Tabela'

function App() {

  

  const  [autores,setAutores] = useState([
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }
  ]);

  return (
    <div className="App">
      <Tabela/>
    </div>
  );
}

export default App;
