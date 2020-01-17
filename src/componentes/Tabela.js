import React,{useState} from 'react';
import TableHead from './TableHead'
import TableBody from './TableBody '

export default function Tabela() {

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

    return(
      
        <table>
        <TableHead/>
        <TableBody autores = { autores} setAutores = {setAutores} />
      </table>

    );
  }
