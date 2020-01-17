import React from 'react';

export default function  TableBody  ({autores, setAutores})  {
    
    const linhas = autores.map((linha, index) => {

        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        )
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}