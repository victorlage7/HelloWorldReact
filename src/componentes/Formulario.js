import React,{useState} from 'react';

export default function  Formulario ({autores, setAutores})  {

    const [nome, setNome] = useState('');
    const [livro, setLivro] = useState('');
    const [preco, setPreco] = useState('');

    // const handleSubmit = ({evt}) =>{
    //     evt.preventDefault();
    //     alert("Submitting Name")
    //     //setAutores({ autores:[autores, autor]})
    // }

   return (
    <form >
            <label htmlFor="nome">Nome</label>
            <input
                id="nome"
                type="text"
                name="nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
            />

            <label htmlFor="livro">Livro</label>
            <input
                id="livro"
                type="text"
                name="livro"
                value={livro}
                onChange={e => setLivro(e.target.value)}
            />


            <label htmlFor="preco">Preço</label>
            <input
                id="preco"
                type="text"
                name="preco"
                value={preco}
                onChange={e => setPreco(e.target.value)}
            />
            <button /*onClick = {e => handleSubmit(e.target.value) }*/  type="button">Salvar</button>
        </form>

    )

}