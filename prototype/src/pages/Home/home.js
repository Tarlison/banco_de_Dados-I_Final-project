import React from 'react';
import './home.css';

//const fs = require('browserify-fs');


export default function Home({history}){

  function handleStock(event){
    event.preventDefault();
    history.push('/stock');
  }
  
  function handleExit(event){
    event.preventDefault();
    history.push('/');
  }

  function handleCad(event){
    event.preventDefault();
    history.push('/cad');
  }

  function handleCadForn(event){
    event.preventDefault();
    history.push('/cadForn');
  }

  function handleListaForn(event){
    event.preventDefault();
    history.push('/ListaForn');
  }

  function handleListaCards(event){
    event.preventDefault();
    history.push('/cards');
  }

  function handleListaFuncs(event){
    event.preventDefault();
    history.push('/funcs');
  }

  function handleCadCards(event){
    event.preventDefault();
    history.push('/newCard');
  }

  function handleCadFunc(event){
    event.preventDefault();
    history.push('/newFunc');
  }

  function handleFechamentos(event){
    event.preventDefault();
    history.push('/fechamentos');
  }

 /*  async function handleRelat(event){
    event.preventDefault();

    return await Axios.get('http://localhost:3333/produtos').then(response => {
      console.log("Relat:"+JSON.stringify(response.data));
      alert("Relatório Gerado Com Sucesso!");
    });
  } */
  
  return(
    <div className="home">
      <div className="conteudo-home">

        <button 
          className="btn"
          onClick={handleCad}
        >
          Cadastrar Novo Produto
        </button>

        <button 
          className="btn"
          onClick={handleCadForn}
        >
          Cadastrar Novo Fornecedor
        </button>

        <button 
          className="btn"
          onClick={handleCadCards}
        >
          Cadastrar Novo Cartão
        </button>

        <button 
          className="btn"
          onClick={handleCadFunc}
        >
          Cadastrar Funcionário
        </button>

        <button 
          className="btn"
          onClick={handleFechamentos}
        >
          Gerenciar Fechamentos
        </button>

      </div>

      <div className='conteudo-home2'>

        <button 
          onClick={handleStock}
          className="btn" 
        >
          Estoque
        </button>

        <button 
          onClick={handleListaForn}
          className="btn" 
        >
          Listar Fornecedores
        </button>

        <button 
            onClick={handleListaCards}
            className="btn" 
          >
            Listar Cartões
        </button>

        <button 
          onClick={handleListaFuncs}
          className="btn" 
        >
          Lista de Funcionários
        </button>

        <button 
          className="btnExit"
          onClick={handleExit}
        >
          Sair
        </button>

      </div>
      
    </div>
  )
}