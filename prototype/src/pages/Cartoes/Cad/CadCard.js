import React, { useState } from 'react';
import './cad.css';


import Axios from 'axios';

export default function CadCard({history}){

  const[numero, setNumero] = useState('');
  const[proprietario, setProprietario] = useState('');
  const[validade, setValidade] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    let obj = {
      numero: numero,
      proprietario: proprietario,
      data_de_validade: validade,
      situacao: 'liberado'
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
  

    Axios.post('http://localhost:3333/cartoes',obj
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
    <div className="cadastroCard">
      <div className="pageTitle">
        <p>Cadastrar Novo Cartão</p>
      </div>
    <div className="containerCadCard">
      <div className="conteudo-cadCard">
        <form onSubmit={handleSubmit}>

          <label htmlFor="numero">Número</label>
          <input 
            id="numero"
            placeholder="Nº do Catão"
            value={numero}
            onChange={event => setNumero(event.target.value)}
          />
          
          <label htmlFor="proprietario">Proprietário</label>
          <input 
            id="proprietario"
            placeholder="Nome Completo"
            value={proprietario}
            onChange={event => setProprietario(event.target.value)}
          />

          <label htmlFor="validade">Data de Validade</label>
          <input 
            id="validade"
            placeholder="DD/MM/AAAA"
            value={validade}
            onChange={event => setValidade(event.target.value)}
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