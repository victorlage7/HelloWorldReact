import React,{useState,Fragment} from 'react';
import './App.css';
import Tabela from './componentes/Tabela'
import Form from './componentes/Formulario'


export default function App() {
  
  const [autores, setAutores] = useState([
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
    },
    {
      nome: 'Nico',
      livro: 'Java',
      preco: '9999'
    }
  ]);

  return (
    <Fragment>
      <Tabela autores = { autores} setAutores = {setAutores} />
      <Form   autores = { autores} setAutores = {setAutores} />
    </Fragment>
  );
}
