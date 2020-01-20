import React,{useState} from 'react';

export default function  Formulario ()  {

    const [nome, setNome] = useState('');
    const [livro, setLivro] = useState('');
    const [preco, setPreco] = useState('');

    return (
        <form>
            <label for="nome">Nome</label>
            <input
                id="nome"
                type="text"
                name="nome"
            />

            <label for="livro">Livro</label>
            <input
                id="livro"
                type="text"
                name="livro"
            />


            <label for="preco">Preço</label>
            <input
                id="preco"
                type="text"
                name="preco"
            />


            <button type="button">Salvar</button>
        </form>

    )

}



}