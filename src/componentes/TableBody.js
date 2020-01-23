import React from 'react';

export default function  TableBody  ({autores, setAutores})  {



    const onChangeAutores = (id) => {
        const listaAutores = autores.filter(autores => autores.nome+autores.livro+autores.preco !== id)
        setAutores(listaAutores)
    }
        
    const linhas = autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = {() => {onChangeAutores(linha.nome+linha.livro+linha.preco)}
            }className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
            </tr>
        )
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}
