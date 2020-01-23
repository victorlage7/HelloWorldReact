import React from 'react';

export default function Header () {
return (
<nav>
        <div className="nav-wrapper indigo lighten-2">
          <a href="/" className="brand-logo">Aplicação Hello World</a>
          <ul className="right">
            <li><a href="/autores">Autores</a></li>
            <li><a href="/livros">Livros</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
);
}