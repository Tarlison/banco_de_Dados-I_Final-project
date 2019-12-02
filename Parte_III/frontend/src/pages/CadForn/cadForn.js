import React, {useState} from 'react';
import './cadForn.css';
import Axios from 'axios';

export default function CadForn({history}){

  const[cnpj, setCnpj] = useState('');
  const[nome, setNome] = useState('');
  const[prod, setProd] = useState('');
  const[endereco, setEndereco] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    let obj = {
      nome_fantasia: nome,
      cnpj:cnpj,
      nome_produto: prod,
      endereco: endereco
    };

    console.log(obj);
    const jsonString = JSON.stringify(obj);
    console.log(jsonString);

    Axios.post('http://localhost:3333/fornecedores',obj,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert("Fornecedor Cadastrado Com Sucesso!")

    history.push('/home');
  }

  function cancelCadForn(event){
    event.preventDefault();

    history.push('/home');
  }
  
  return(
    <div className="cadForn">
    <div className="contayner-forn">
      <div className="conteudo-forn">
        <form onSubmit={handleSubmit}>

          <label htmlFor="razao">Nome</label>
          <input 
            id="nome"
            placeholder="Razao Social"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />

          <label htmlFor="cnpj">CNPJ</label>
          <input 
            id="nome"
            placeholder="CNPJ"
            value={cnpj}
            onChange={event => setCnpj(event.target.value)}
          />

          <label htmlFor="cnpj">Produto Fornecido</label>
          <input 
            id="nome_produto"
            placeholder="Produto Fornecido"
            value={prod}
            onChange={event => setProd(event.target.value)}
          />

          <label htmlFor="endereco">Endereço</label>
          <input 
            id="endereco"
            placeholder="Endereço"
            value={endereco}
            onChange={event => setEndereco(event.target.value)}
          />

          <div className="buttonContainer">
            <button type="submit" className="btn">Cadastrar</button>
            <button onClick={cancelCadForn} className="btn">Cancelar</button>
          </div>


        </form>
      </div>
    </div>
    <div className="pageTitleForn">
      <p>Cadastrar Fornecedor</p>
    </div>
    </div>
  )
}