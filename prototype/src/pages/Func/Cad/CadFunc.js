import React, { useState } from 'react';
import './cadF.css';


import Axios from 'axios';

export default function CadFunc({history}){

  const[nome, setNome] = useState('');
  const[cpf, setCPF] = useState('');
  const[salario, setSalario] = useState('');
  const[cargo, setCargo] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    let obj = {
      nome: nome,
      cpf: cpf,
      salario: salario,
      cargo: cargo
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
  

    Axios.post('http://localhost:3333/funcionarios',obj
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
    <div className="cadastroFunc">
      <div className="pageTitle">
        <p>Cadastrar Novo Funcionário</p>
      </div>
    <div className="containerCadFunc">
      <div className="conteudo-cadFunc">
        <form onSubmit={handleSubmit}>

          <label htmlFor="nome">Nome</label>
          <input 
            id="nome"
            placeholder="Nome Completo"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
          
          <label htmlFor="cpf">CPF</label>
          <input 
            id="cpf"
            placeholder="Nº do Documento de Identidade"
            value={cpf}
            onChange={event => setCPF(event.target.value)}
          />

          <label htmlFor="salario">Salário</label>
          <input 
            id="salario"
            placeholder="Em Reais"
            value={salario}
            onChange={event => setSalario(event.target.value)}
          />

          <label htmlFor="cargo">Cargo</label>
          <input 
            id="cargo"
            placeholder="Cargo"
            value={cargo}
            onChange={event => setCargo(event.target.value)}
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