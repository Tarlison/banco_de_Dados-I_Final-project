import React, {useState} from 'react';
import {withRouter, useHistory } from 'react-router-dom';
import Axios from 'axios';

import './edit.css';

function Editar(props){

  const[nomeAlt, setNomeAlt] = useState('');
  const[descAlt, setdescAlt] = useState('');
  const[precoAlt, setPrecoAlt] = useState('');
  const[quantidadeAlt, setQntAlt] = useState('');
  const[nome_fornecedorAlt, setNomeFornAlt] = useState('');

  let history = useHistory();
  const dados = JSON.stringify(props.location.data);
  const obj = JSON.parse(dados);

  console.log("q q tem : " + obj.nome);

  function handleSubmit(event){
    event.preventDefault();

    let objAlt = {
      nome: nomeAlt,
      descricao: descAlt,
      preco: precoAlt,
      quantidade: quantidadeAlt,
      fornecedor: nome_fornecedorAlt
    };

    if (objAlt.nome === ''){
      objAlt = {
        nome: obj.nome,
        desc: descAlt,
        preco: precoAlt,
        quantidade: quantidadeAlt,
        fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.descricao === ''){
      objAlt = {
        nome: objAlt.nome,
        descricao: obj.descricao,
        preco: precoAlt,
        quantidade: quantidadeAlt,
        fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.preco === ''){
      objAlt = {
        nome: objAlt.nome,
        descricao: objAlt.descricao,
        preco: obj.preco,
        quantidade: quantidadeAlt,
        fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.quantidade === ''){
      objAlt = {
        nome: objAlt.nome,
        descricao: objAlt.descricao,
        preco: objAlt.preco,
        quantidade: obj.quantidade,
        fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.nome_fornecedor === ''){
      objAlt = {
        nome: objAlt.nome,
        descricao: objAlt.descricao,
        preco: objAlt.preco,
        quantidade: objAlt.quantidade,
        fornecedor: obj.fornecedor
      };
    }


    const jsonStringfied = JSON.stringify(objAlt);

    console.log(jsonStringfied);

    Axios.put(`http://localhost:3333/produtos/${obj.id}`,jsonStringfied,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert("Produto Alterado Com Sucesso!")

    history.push('/home');
  }


  function cancelEd(event){
    event.preventDefault();

    history.push('/home');
  }

  return(

    <div className="editar">
      
      <p>Editar Produto</p>

      <div className="editor-container">

        <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome</label>
        <input 
          id="nomeAlt"
          placeholder={obj.nome}
          value={nomeAlt}
          onChange={event => setNomeAlt(event.target.value)}
        />

        <label htmlFor="desc">Descrição</label>
        <input 
          id="descAlt"
          placeholder={obj.descricao}
          value={descAlt}
          onChange={event => setdescAlt(event.target.value)}
        />

        <label htmlFor="preco">Preço</label>
        <input
          id="precoAlt"
          placeholder={obj.preco}
          value={precoAlt}
          onChange={event => setPrecoAlt(event.target.value)}
        
        />

        <label htmlFor="qnt">Quantidade</label>
        <input
          id="qntAlt"
          placeholder={obj.quantidade}
          value={quantidadeAlt}
          onChange={event => setQntAlt(event.target.value)}
        
        />

        <label htmlFor="forn">Fornecedor</label>
        <input
          id="fornAlt"
          placeholder={obj.fornecedor}
          value={nome_fornecedorAlt}
          onChange={event => setNomeFornAlt(event.target.value)}
        
        />

        <div className="buttonContainer">
          <button type="submit" className="btn">Alterar</button>
          
          <button onClick={cancelEd} className="btn">
            
              Cancelar
            
          </button>
          
        </div>

        </form>
      </div>
    </div>
  )
}

export default withRouter(Editar);