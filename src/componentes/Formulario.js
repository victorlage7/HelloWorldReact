import React, { useState } from "react";

export default function Formulario({ autores, setAutores }) {
  const [autor, setAutor] = useState({ nome: "", livro: "", preco: "" });

  const handleSubmit = e => {
    e.preventDefault();

    setAutores([...autores, autor]);
  };
  const {nome, livro, preco} = autor
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={nome}
        onChange={e => setAutor({...autor, nome: e.target.value})}
      />

      <label htmlFor="livro">Livro</label>
      <input
        id="livro"
        type="text"
        name="livro"
        value={livro}
        onChange={e => setAutor({...autor, livro: e.target.value})}
      />

      <label htmlFor="preco">Preço</label>
      <input
        id="preco"
        type="text"
        name="preco"
        value={preco}
        onChange={e => setAutor({...autor, preco: e.target.value})}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}
