import React, { useState } from 'react';
import './cad.css';

import Axios from 'axios';

export default function Cadastro({history}){

  const[nome, setNome] = useState('');
  const[desc, setDesc] = useState('');
  const[preco, setPreco] = useState('');
  const[quantidade, setQnt] = useState('');
  const[nome_fornecedor, setForn] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    let obj = {
      nome: nome,
      descricao: desc,
      preco: preco,
      quantidade: quantidade,
      fornecedor: nome_fornecedor
    };

    //const jsonStrinfyied = JSON.stringify(obj);
    //new FormData();
    //history.push('/home');
/*
    data.append('nome', nome);
    data.append('desc', desc);
    data.append('preco', preco);
    data.append('quantidade', quantidade);
    data.append(nome_fornecedor, nome_fornecedor);
 */
    console.log(obj);
  

    Axios.post('http://localhost:3333/produtos',obj
     ).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert("Produto Cadastrado Com Sucesso!")

    history.push('./home');

  }

  function cancelCad(event){
    event.preventDefault();

    history.push('/home');
  }

  return(
    <div className="cadastro">
      <div className="pageTitle">
        <p>Cadastrar Novo Produto</p>
      </div>
    <div className="contayner">
      <div className="conteudo-cad">
        <form onSubmit={handleSubmit}>

          <label htmlFor="nome">Nome</label>
          <input 
            id="nome"
            placeholder="Nome do Produto"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
          
          <label htmlFor="desc">Descrição</label>
          <input 
            id="desc"
            placeholder="Gotas, Comprimidos, ..."
            value={desc}
            onChange={event => setDesc(event.target.value)}
          />

          <label htmlFor="price">Preco</label>
          <input 
            id="preco"
            placeholder="Preco em reais"
            value={preco}
            onChange={event => setPreco(event.target.value)}
          />

          <label htmlFor="quant">Quantidade <span>(em reais)</span></label>
          <input 
            id="quantidade"
            placeholder="Inteiros"
            value={quantidade}
            onChange={event => setQnt(event.target.value)}
          />
          
          <label htmlFor="forn">Fornecedor</label>
          <input 
            id="nome_fornecedor"
            placeholder="Fornecedor"
            value={nome_fornecedor}
            onChange={event => setForn(event.target.value)}
          />


          <div className="buttonContainer">
          <button type="submit" className="btn">Cadastrar</button>
          <button onClick={cancelCad} className="btn">Cancelar</button>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}