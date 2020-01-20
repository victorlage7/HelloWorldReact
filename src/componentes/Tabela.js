import React,{useState} from 'react';
import TableHead from './TableHead'
import TableBody from './TableBody '

export default function Tabela() {

  const [autores, setAutores] = useState([
    {
      id:1,
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      id:2,
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      id:3,
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      id:4,
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
    {
      id:5,
      nome: 'Nico',
      livro: 'Java',
      preco: '9999'
    }
  ]);

    return(
      
        <table>
        <TableHead/>
        <TableBody autores = { autores} setAutores = {setAutores} />
      </table>

    );
  }
