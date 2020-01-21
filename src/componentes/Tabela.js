import React from 'react';
import TableHead from './TableHead'
import TableBody from './TableBody'

export default function Tabela({autores, setAutores}) {

    return(
      
        <table>
        <TableHead/>
        <TableBody autores = {autores} setAutores = {setAutores} />
       </table>

    );
  }
